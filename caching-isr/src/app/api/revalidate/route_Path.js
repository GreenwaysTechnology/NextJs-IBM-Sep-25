import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    //get the path to revalidate
    const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
    //call revalidate api to clear
    revalidatePath(path)
    return NextResponse.json({
        path:path,
        revalidate: true, now: new Date(), cache: 'no-store'
    })
}