import { prismaMock } from "../mocks/prisma";

const resolve = (
    query: any,
    _parent: any,
    args: { email: string },
    ctx: any,
) => {
    return prismaMock.users.findUnique({
        ...query,
        where: { email: args.email },
    });
};

const mockQuery = {};
const mockCtx = {};

//returns user data if email is found
test("Returns a user when email exists", async () => {
    const mockUser = {
        id: 1,
        name: "John Doe",
        email: "johnDoe@example.com",
    };

    prismaMock.users.findUnique.mockResolvedValue(mockUser);
    const result = await resolve(
        mockQuery,
        null,
        { email: "alice@example.com" },
        mockCtx,
    );
    expect(result).toEqual(mockUser);
    expect(prismaMock.users.findUnique).toHaveBeenCalledWith({
        where: { email: "alice@example.com" },
    });
});
//ensure query returns null when email not found
test("Returns null when a email doesn't exist", async () => {
    prismaMock.users.findUnique.mockResolvedValue(null);
    const result = await resolve(
        mockQuery,
        null,
        { email: "ghostEmail@mail.com" },
        mockCtx,
    );

    expect(result).toBe(null);
});

test("spreads the query object into findUnique", async () => {
    const queryWithSelect = { select: { id: true, name: true } };

    await resolve(queryWithSelect, null, { email: "bob@example.com" }, mockCtx);

    expect(prismaMock.users.findUnique).toHaveBeenCalledWith({
        select: { id: true, name: true },
        where: { email: "bob@example.com" },
    });
});

//simulates a DB failure/crashes
test("throws when prisma throws", async () => {
    prismaMock.users.findUnique.mockRejectedValue(
        new Error("DB connection failed"),
    );

    await expect(
        resolve(mockQuery, null, { email: "alice@example.com" }, mockCtx),
    ).rejects.toThrow("DB connection failed");
});

test("only calls findUnique once per request", async () => {
    prismaMock.users.findUnique.mockResolvedValue(null);

    await resolve(mockQuery, null, { email: "test@example.com" }, mockCtx);

    expect(prismaMock.users.findUnique).toHaveBeenCalledTimes(1);
});
