//This is server component

import Counter from "@/app/counter/components/Counter";

export default function CounterPage(){
    console.log('Counter page')
    return <div className="m-30">
            <Counter/>
    </div>
}