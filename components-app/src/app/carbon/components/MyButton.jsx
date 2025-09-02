'use client'
import { Button } from "@carbon/react";

export default function MyButton(){
    return <>
        <Button onClick={()=>{
            alert('button is clicked')
        }}>Click</Button>
    </>
}