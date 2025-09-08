'use client'

import { useSearchParams } from "next/navigation"

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const email = searchParams.get('email')

    return <div className="m-40">
        <h1>Name: {name}</h1>
        <h2>Email :{email}</h2>
    </div>
}