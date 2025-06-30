import { jwtVerify, importSPKI } from "jose";
import { readFileSync } from "fs";
import { join } from "path";

type SessionPayload = {
    id: string | number;
    expiresAt: Date;
};

// Load public key for verification only
const publicKeyPem = readFileSync(
    join(process.cwd(), "public_key.pem"),
    "utf8"
);

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
