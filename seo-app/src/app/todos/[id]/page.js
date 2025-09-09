export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}
export async function generateMetadata({ params, searchParams }, parent) {
    const id = (await params).id
    const todo = await fetchTodosByid(Number(id))

    //meta object
    return {
        title: todo.title,
        description:todo.title
    }

}
