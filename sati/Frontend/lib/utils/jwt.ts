import {
    SignJWT,
    jwtVerify,
    type JWTPayload,
    importPKCS8,
    importSPKI,
} from "jose";

export type SessionPayload = {
    id: string | number;
    expiresAt: Date;
};

// Use environment variables for keys (set in Vercel dashboard)
const privateKeyPem = process.env.JWT_PRIVATE_KEY || "";
const publicKeyPem = process.env.JWT_PUBLIC_KEY || "";

export const generateToken = async (payload: SessionPayload) => {
    const privateKey = await importPKCS8(privateKeyPem, "RS256");

    return new SignJWT(payload)
        .setProtectedHeader({ alg: "RS256" })
        .setIssuedAt()
        .setExpirationTime("1hr")
        .sign(privateKey);
};

export const verifyToken = async (
    session: string | undefined = ""
): Promise<SessionPayload | null> => {
    try {
        const publicKey = await importSPKI(publicKeyPem, "RS256");

        const { payload } = await jwtVerify(session, publicKey, {
            algorithms: ["RS256"],
        });

        return payload as SessionPayload;
    } catch (err) {
        console.error("Token verification failed:", err);
        return null;
    }
};
