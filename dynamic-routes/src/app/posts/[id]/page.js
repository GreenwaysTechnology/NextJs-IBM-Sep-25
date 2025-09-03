export async function fetchPostById(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)
    return response.json()
}
export default async function PostDetailsPage(props) {
    const id = (await props.params).id
    const post = await fetchPostById(+id)
    return <div className="m-25">
        <h1>{id} details</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>

}