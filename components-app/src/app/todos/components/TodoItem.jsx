
export default function TodoItem(props) {
    const { todo } = props
    return <>
        <h1>Id : {todo.id} UserId: {todo.userId}</h1>
        <h3>{todo.title}</h3>
        <h4>{todo.completed ? "Completed" : "In Progress"}</h4>
    </>
}