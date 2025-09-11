import { signJWT } from "@/app/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req) {
    const { username, password } = await req.json()
    // ✅ Replace with real authentication
    if (username === "admin" && password === "admin") {
        // Create session token (in real apps use JWT or DB session id)
        const token = await signJWT({ username, role: "admin" });
        console.log(token)
        const cookieStore = await cookies()
        cookieStore.set("session", token, {
            httpOnly: true,   // cannot be accessed by JS
            secure: process.env.NODE_ENV === "production",    // only over HTTPS
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60,  // 1 hour
        });
        return Response.json({ success: true });
    }

    return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}