export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "../../../lib/jwt";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("session")?.value;
        console.log("Verify API - token exists:", !!token);

        if (!token) {
            return NextResponse.json({ valid: false }, { status: 401 });
        }

        const session = await verifyToken(token);
        console.log("Verify API - session:", session);

        if (!session?.id) {
            return NextResponse.json({ valid: false }, { status: 401 });
        }

        return NextResponse.json({ valid: true, session });
    } catch (error) {
        console.error("Verify API error:", error);
        return NextResponse.json({ valid: false, error: String(error) }, { status: 500 });
    }
}
