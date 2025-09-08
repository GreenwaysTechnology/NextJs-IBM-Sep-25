'use client'

import { createUser } from "@/app/actions/userAction"

export default function UserForm() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //read data from the form
            const user = {
                name: e.target.name.value,
                email:e.target.email.value
            }
            const result = await createUser(user)
            alert(JSON.stringify(result))
        }
        catch (err) {
            console.log(err)
        }
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="name" placeholder="Name" required />
        </div>
        <div>
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">create</button>
        </div>
    </form>
}