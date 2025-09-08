'use server'

export async function createUser(data) {
    console.log(data)
    return {
        success: true,
        message: 'Data Saved Successfully'
    }
}