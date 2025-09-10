//route segment options
//to enable cache
// export const fetchCache = 'force-cache'

//to disable cache

export const fetchCache = 'force-no-store'


export async function getTime() {
    const url = `https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`
    const response = await fetch(url, { cache: 'force-cache' })
    return await response.json()
}
export async function getTime_v2() {
    const url = `https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`
    const response = await fetch(url)
    return await response.json()
}

export default async function TimeCachePage() {
    const data = await getTime()
    const data1 = await getTime_v2()
    return <div className="m-20">
        <h1 className="font-bold">Time Now V1: {new Date(data.dateTime).toLocaleTimeString()}</h1>
        <h1 className="font-bold">Time Now V2: {new Date(data1.dateTime).toLocaleTimeString()}</h1>

    </div>
}
