import React, { Suspense } from 'react'
const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

const Hello = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/greeter'))
    })
})

export default function Page() {
    return <div>
        <h1 className="m-30 text-center">Header</h1>
        <Suspense fallback={<h1 className="m-30 text-center">Loading Welcome...</h1>}>
            <Welcome />
        </Suspense>
        <Suspense fallback={<h1 className="m-30 text-center">Loading Hello...</h1>}>
            <Hello />
        </Suspense>
        <h1 className="m-30 text-center">Footer</h1>
    </div>
}