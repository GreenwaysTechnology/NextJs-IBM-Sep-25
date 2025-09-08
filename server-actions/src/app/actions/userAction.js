'use server'

import { redirect } from "next/navigation"

export async function createUser(data) {
    console.log(data.get('name'), data.get('email'))

    redirect(`/success?name=${encodeURIComponent(data.get("name"))}&email=${encodeURIComponent(data.get("email"))}`);
}