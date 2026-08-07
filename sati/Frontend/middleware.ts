import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, importSPKI } from "jose";

//protected routes
const protectedRoutes = ["/dashboard"];
//public routes
const publicRoutes = ["/login", "/signup", "/"];

async function verifyAuth(token: string | undefined) {
    if (!token) return null;

    try {
        const publicKey = process.env.PUBLIC_KEY;
        if (!publicKey) {
            console.error("PUBLIC_KEY environment variable not set");
            return null;
        }

        const key = await importSPKI(publicKey, "RS256");
        const { payload } = await jwtVerify(token, key, {
            algorithms: ["RS256"],
        });

        return payload;
    } catch (err) {
        console.error("Token verification failed:", err);
        return null;
    }
}

export const middleware = async (req: NextRequest) => {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    console.log("🌐 Middleware running on:", path);

    const token = req.cookies.get("session")?.value;
    const session = await verifyAuth(token);

    console.log("Session exists:", !!session);
    console.log("Is protected:", isProtectedRoute);

    //redirect to login if accessing protected route without session
    if (isProtectedRoute && !session?.id) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    //redirect to dashboard if accessing public route with valid session
    if (
        isPublicRoute &&
        session?.id &&
        !req.nextUrl.pathname.startsWith("/dashboard")
    ) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
