import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "../../../Backend/utils/jwt";

export const createSession = async (token: string) => {
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // Fixed: was multiplying instead of adding
    const session = token;
    cookies().set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });
    console.log("session created");
    // Don't redirect here - let the caller handle it
};

export const createSessionAndRedirect = async (token: string) => {
    await createSession(token);
    redirect("/dashboard");
};

export const verifySession = async () => {
    try {
        const cookie = cookies().get("session")?.value;
        if (!cookie) redirect("/login");

        const session = await verifyToken(cookie);
        if (!session?.id) redirect("/login");

        return { isAuth: true, id: Number(session.id) };
    } catch {
        redirect("/login");
    }
};

export async function deleteSession() {
    cookies().delete("session");
    redirect("/login");
}
