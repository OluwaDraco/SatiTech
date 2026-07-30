import { jwtVerify, importSPKI } from "jose";

type SessionPayload = {
    id: string | number;
    expiresAt: Date;
};

// Use environment variable for public key
const publicKeyPem = process.env.JWT_PUBLIC_KEY || "";

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
