export const fetchCache = 'force-cache'


export async function getTime() {
    const url = `https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`
    // const url = 'http://localhost:8080/api/timezone/Asia/Kolkata'
    const response = await fetch(url, { next: { revalidate: 2 } })
    return await response.json()
}


export default async function TimeCachePage() {
    const data = await getTime()
    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}
