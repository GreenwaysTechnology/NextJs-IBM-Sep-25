//client Server

'use client' //directive

import { useState } from "react"

export default function Counter() {
    
    const [value, setValue] = useState(0)
    return <div>
        <h1>Counter : {value}</h1>
        <button onClick={() => {
            console.log('Button is clicked')
            setValue(value + 1)
        }}>+</button>
    </div>
}