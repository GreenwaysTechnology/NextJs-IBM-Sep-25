import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    //get the path to revalidate
    const path = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    //call revalidate api to clear
    revalidateTag(path)
    return NextResponse.json({
        path: path,
        revalidate: true, now: new Date(), cache: 'no-store'
    })
}