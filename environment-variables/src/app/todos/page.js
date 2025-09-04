
export async function fetchTodos() {
    const response = await fetch(`${process.env.TODOS_URL}`)
    return await response.json()
}
export default async function TodosPage() {
    const todos = await fetchTodos()
    return <ul>
        {todos.map(todo => {
            return <li key={todo.id}>
                <span>{todo.title}</span>
            </li>
        })}
    </ul>
}