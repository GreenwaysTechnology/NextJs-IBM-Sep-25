'use server'

import { redirect } from "next/navigation"

export async function createUser(data) {
    console.log(data)
    redirect('/success')
}