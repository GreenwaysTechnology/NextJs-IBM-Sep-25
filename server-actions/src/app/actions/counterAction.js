'use server'

let count = 0
export async function increment() {
    console.log('Running in server', count)
    //return count - Promise.resolve(count)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count++)
        }, 100)
    })
}
export async function decrement() {
    console.log('Running in server', count)
    //return count - Promise.resolve(count)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count--)
        }, 100)
    })
}
