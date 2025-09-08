import { notFound } from "next/navigation"

//dummy docs
const docs = {
    //"key:value"
    "getting-started": "How to get started-Machine Learning",
    "advanced": "This is Deep Learning Concept"
}
export default async function DocsDetailsPage({ params }) {
    const slug = (await params).slug
    const path = slug.join("/")
    const content = docs[path]

    if(!content){
        notFound()
    }


    return <div className="p-6">
        <h1>Docs : {path}</h1>
        <p>{content}</p>
    </div>
}