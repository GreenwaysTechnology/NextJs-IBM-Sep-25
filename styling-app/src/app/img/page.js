import Image from "next/image";

export default function ImagePage(){

    return <div className="m-10">
          <Image src="/next.svg" height={500} width={500} alt="Next"/>
    </div>
}