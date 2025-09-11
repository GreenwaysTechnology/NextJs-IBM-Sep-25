import { NextResponse } from "next/server"
import { verifyJwt } from "@/app/lib/jwt";

export async function middleware(req) {

    const token = req.cookies.get("session")?.value;
    const session = token ? await verifyJwt(token) : null;

    if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    return NextResponse.next()
}

//authorization configuration
export const config = {
    mather: ["/dashboard/:/path*"]
}