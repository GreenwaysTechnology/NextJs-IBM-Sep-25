'use client'

// import Server from "@/app/clientserverpattern/components/server"

export default function Client(props){
    return <>
        <h1>Client Component</h1>
        {/* <Server/> */}
        {props.children}
    </>
}