export async function fetchGreeter() {
    const url = 'http://localhost:3000/api/greeter'
    const response = await fetch(url)
    return response.json()
}
export default async function Greeter() {
    const { message } = await fetchGreeter()
    return <div className="flex text-center mt-19">
        <h1>{message}</h1>
    </div>
}