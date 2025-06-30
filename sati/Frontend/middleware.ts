import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

//protected routes
const protectedRoutes = ["/dashboard"];
//public routes
const publicRoutes = ["/login", "/signup", "/"];

export const middleware = async (req: NextRequest) => {
    const baseUrl = req.nextUrl.origin;

    //check if route in public or protected
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);
    console.log("🌐 Middleware running on:", path);
    console.log("base url is ", baseUrl);

    const cookie = cookies().get("session")?.value;
    let session: any = null;
    if (cookie) {
        try {
            const res = await fetch(`${req.nextUrl.origin}/api/verify`, {
                method: "GET",
                headers: {
                    Cookie: `session=${cookie}`,
                },
                credentials: "include",
            });
            console.log(res.ok);

            if (res.ok) {
                const data = await res.json();
                session = data.session;
            }
        } catch (err) {
            console.error("Verification fetch failed:", err);
        }
    }
    console.log("Is protected:", isProtectedRoute);

    //redirect
    if (isProtectedRoute && !session?.id) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

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
