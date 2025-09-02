import Client from "@/app/clientserverpattern/components/client";
import Server from "@/app/clientserverpattern/components/server"

export default function ClientServerComponentPage() {
    return <>
        {/* <Client/> */}
        <Client>
            {/* pass server as prop */}
            <Server />
        </Client>
    </>
}