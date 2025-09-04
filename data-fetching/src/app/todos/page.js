export async function fetchTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(url)
    return response.json()
}

export default async function TodosPage() {
    const todos = await fetchTodos()
        return <div className="m-20">
        <h1>Todos Page</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </div>
}