'use client'

import { increment,decrement } from "@/app/actions/counterAction"
import { useState, useTransition } from "react"

export default function Counter({ initalCount = 0 }) {
    const [isPending, startTransition] = useTransition()
    const [count, setCount] = useState(initalCount)
    const handleIncrement = () => {
        startTransition(async () => {
            const newCount = await increment()
            setCount(newCount)
        })
    }
    const handleDecrement = () => {
        startTransition(async () => {
            const newCount = await decrement();
            setCount(newCount);
        });
    };
    return <>
        <h1>{isPending ? 'Updating...' : `count:${count}`}</h1>

        <button onClick={handleIncrement} disabled={isPending}>
            ➕ {isPending ? "Updating..." : "Increment"}
        </button>
        <button onClick={handleDecrement} disabled={isPending}>
            ➖ {isPending ? "Updating..." : "Decrement"}
        </button>
    </>
}