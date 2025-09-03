import TODOS from "@/app/mock-data/todos"

export async function fetchTodoById(id) {
    return TODOS.find(todo => todo.id === id)
}

export default async function TodosDetailsPage(props) {
    console.log(await props.params)
    const id = (await props.params).id
    const todo = await fetchTodoById(+id)
    return <div className="m-40">
        <h1>{id} details</h1>
        <h3>{todo.title}</h3>
        <h4>{todo.status ? "Completed" :"In Progress"}</h4>
    </div>
}