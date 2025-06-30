export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "../../../lib/jwt";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("session")?.value;
    // if (!token) return NextResponse.json({ valid: false }, { status: 401 });
    // console.log(token);

    const session = await verifyToken(token);
    if (!session?.id) {
        return NextResponse.json({ valid: false }, { status: 401 });
    }

    return NextResponse.json({ valid: true, session });
}
