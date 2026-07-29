import path from "path";
import { fileURLToPath } from "url";
import {
    SignJWT,
    jwtVerify,
    type JWTPayload,
    importPKCS8,
    importSPKI,
} from "jose";
import { readFileSync } from "fs";
import { join } from "path";

export type SessionPayload = {
    id: string | number;
    expiresAt: Date;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const privateKeyPem = readFileSync(
    join(__dirname, "../../private_key.pem"),
    "utf8"
);
const publicKeyPem = readFileSync(join(__dirname, "../../public_key.pem"), "utf8");

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
