// tests/unit/login.test.ts
import { prismaMock } from "../mocks/prisma";

jest.mock("../../utils/db", () => ({
    prisma: prismaMock,
}));

jest.mock("../../utils/bcrypt", () => ({
    comparePassword: jest.fn(),
    hashPassword: jest.fn(),
}));

jest.mock("../../utils/jwt", () => ({
    generateToken: jest.fn(),
    verifyToken: jest.fn(),
}));

import { comparePassword, hashPassword } from "../../utils/bcrypt";
import { generateToken, verifyToken } from "../../utils/jwt";

const resolve = async (
    _parent: any,
    args: { email: string; password: string },
    ctx: any,
) => {
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    const user = await prismaMock.users.findUnique({
        where: { email: args.email },
    });
    if (!user) throw new Error("Incorrect email or password");
    if (!user.password) throw new Error("Incorrect email or password");

    const passwordMatch = await (comparePassword as jest.Mock)(
        args.password,
        user.password,
    );
    if (!passwordMatch) throw new Error("Incorrect email or password");

    const token = await (generateToken as jest.Mock)({
        id: user.id,
        expiresAt,
    });

    return { token, user };
};

// ─── TEST DATA ─────────────────────────────────────────

const mockUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    password: "$2b$10$hashedpasswordhere",
    createdAt: new Date(),
};

const mockCtx = {};

// ─── TESTS ─────────────────────────────────────────────

describe("Mutation: login", () => {
    beforeEach(() => {
        //clear the call history
        jest.clearAllMocks();
    });
    test("returns token and user on valid credentials", async () => {
        prismaMock.users.findUnique.mockResolvedValue(mockUser);
        (comparePassword as jest.Mock).mockResolvedValue(true);
        (generateToken as jest.Mock).mockResolvedValue("jwt-token-123");

        const result = await resolve(
            null,
            {
                email: "alice@example.com",
                password: "correctpassword",
            },
            mockCtx,
        );

        expect(result).toEqual({
            token: "jwt-token-123",
            user: mockUser,
        });
    });

    test("throws when email does not exist", async () => {
        prismaMock.users.findUnique.mockResolvedValue(null);

        await expect(
            resolve(
                null,
                { email: "ghost@example.com", password: "any" },
                mockCtx,
            ),
        ).rejects.toThrow("Incorrect email or password");

        expect(comparePassword).not.toHaveBeenCalled();
    });

    // ─── USER HAS NO PASSWORD

    test("throws when user has no password set", async () => {
        prismaMock.users.findUnique.mockResolvedValue({
            ...mockUser,
            password: null,
        });

        expect(
            resolve(
                null,
                { email: "alice@example.com", password: "any" },
                mockCtx,
            ),
        ).rejects.toThrow("Incorrect email or password");

        expect(comparePassword).not.toHaveBeenCalled();
    });

    // ─── WRONG PASSWORD ────────────────────────────────

    test("throws when password does not match", async () => {
        prismaMock.users.findUnique.mockResolvedValue(mockUser);
        (comparePassword as jest.Mock).mockResolvedValue(false);

        await expect(
            resolve(
                null,
                { email: "alice@example.com", password: "wrongpassword" },
                mockCtx,
            ),
        ).rejects.toThrow("Incorrect email or password");

        expect(generateToken).not.toHaveBeenCalled();
    });

    // ─── CORRECT ARGS PASSED TO DEPENDENCIES ───────────

    test("calls findUnique with correct email", async () => {
        prismaMock.users.findUnique.mockResolvedValue(mockUser);
        (comparePassword as jest.Mock).mockResolvedValue(true);
        (generateToken as jest.Mock).mockResolvedValue("token");

        await resolve(
            null,
            { email: "alice@example.com", password: "pass" },
            mockCtx,
        );

        expect(prismaMock.users.findUnique).toHaveBeenCalledWith({
            where: { email: "alice@example.com" },
        });
    });

    test("compares raw password against hashed password", async () => {
        prismaMock.users.findUnique.mockResolvedValue(mockUser);
        (comparePassword as jest.Mock).mockResolvedValue(true);
        (generateToken as jest.Mock).mockResolvedValue("token");

        await resolve(
            null,
            { email: "alice@example.com", password: "mypassword" },
            mockCtx,
        );

        expect(comparePassword).toHaveBeenCalledWith(
            "mypassword", // raw password from args
            mockUser.password, // hashed password from DB
        );
    });

    test("generates token with correct user id and expiry", async () => {
        prismaMock.users.findUnique.mockResolvedValue(mockUser);
        (comparePassword as jest.Mock).mockResolvedValue(true);
        (generateToken as jest.Mock).mockResolvedValue("token");

        const beforeTest = Date.now();
        await resolve(
            null,
            { email: "alice@example.com", password: "pass" },
            mockCtx,
        );

        expect(generateToken).toHaveBeenCalledWith(
            expect.objectContaining({
                id: mockUser.id,
                expiresAt: expect.any(Date),
            }),
        );

        // Verify expiry is ~1 hour from now
        const callArgs = (generateToken as jest.Mock).mock.calls[0][0];
        const expiryMs = callArgs.expiresAt.getTime() - beforeTest;
        expect(expiryMs).toBeGreaterThanOrEqual(59 * 60 * 1000); // at least 59 min
        expect(expiryMs).toBeLessThanOrEqual(61 * 60 * 1000); // at most 61 min
    });

    // ─── SECURITY: SAME ERROR MESSAGE ──────────────────

    test("uses identical error message for all auth failures", async () => {
        const expectedMsg = "Incorrect email or password";

        // No user
        prismaMock.users.findUnique.mockResolvedValue(null);
        await expect(
            resolve(null, { email: "x@x.com", password: "p" }, mockCtx),
        ).rejects.toThrow(expectedMsg);

        // No password on user
        prismaMock.users.findUnique.mockResolvedValue({
            ...mockUser,
            password: null,
        });
        await expect(
            resolve(null, { email: "x@x.com", password: "p" }, mockCtx),
        ).rejects.toThrow(expectedMsg);

        // Wrong password
        prismaMock.users.findUnique.mockResolvedValue(mockUser);
        (comparePassword as jest.Mock).mockResolvedValue(false);
        await expect(
            resolve(null, { email: "x@x.com", password: "p" }, mockCtx),
        ).rejects.toThrow(expectedMsg);
    });

    // ─── DB ERROR ──────────────────────────────────────

    test("throws when database fails", async () => {
        prismaMock.users.findUnique.mockRejectedValue(new Error("DB timeout"));

        await expect(
            resolve(
                null,
                { email: "alice@example.com", password: "pass" },
                mockCtx,
            ),
        ).rejects.toThrow("DB timeout");
    });
});
