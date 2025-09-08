export default async function DetailsPage({ params }) {
    const values = (await params)

    return <div className="m-40">
        <h1> {JSON.stringify(values)}</h1>
    </div>
}