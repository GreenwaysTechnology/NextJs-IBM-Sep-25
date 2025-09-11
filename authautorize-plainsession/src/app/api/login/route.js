import { cookies } from "next/headers"

//mock user
let tmpUserName = 'admin'
let tmpPassword = 'admin'
export async function POST(req) {
    //read user name and password
    const { username, password } = await req.json()
    //look up the username and password from the db in realtime but now we use dummy user
    if (username === tmpUserName && password === tmpPassword) {
        //generate SessionId - in real time we use tokens but now we use dummy id
        const sessionId = "user-123"
        //create cookie and append SessionId as part of cookie
        const cookieStore = await cookies()
        //set cookieData  which is by server in the first request
        cookieStore.set("session", sessionId, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 // 1 hour valid
        })
        return Response.json({ success: true })
    }
    return Response.json({ success: false, message: 'Invalid Credentials' }, { status: 401 })
}