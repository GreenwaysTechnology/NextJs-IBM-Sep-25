import users from "@/app/mock-data/users"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    const id = (await params).id
    const user = users.find(tmpUser => {
        return tmpUser.id === +id
    })
    if (!user) {
        return NextResponse.json({ error: 'User Not Found' }, { status: 404 })
    }
    return NextResponse.json(user)
}

export async function PUT(req, { params }) {
    const id = (await params).id
    const body = await req.json()
    const userIndex = users.findIndex(tmpUser => tmpUser.id === +id)
    if (userIndex === -1) {
        return NextResponse.json({ error: 'User Not Found' }, { status: 404 })
    }
    users[userIndex] = { ...users[userIndex], ...body }
    return NextResponse.json(users[userIndex])
}
export async function DELETE(req, { params }) {
    const id = (await params).id
    const userIndex = users.findIndex(tmpUser => tmpUser.id === id)
    users.splice(userIndex)
    return NextResponse.json({ message: 'User has been deleted' })

}