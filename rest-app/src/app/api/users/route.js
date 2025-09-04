import USERS from "@/app/mock-data/users";
import { NextResponse } from "next/server";


//return all user
export async function GET(req) {
    return NextResponse.json(USERS)
}

//post
export async function POST(req) {
    const body = await req.json()
    const newUser = {
        id: USERS.length + 1, ...body
    }
    USERS.push(newUser)
    return NextResponse.json(newUser, { status: 201 })
}