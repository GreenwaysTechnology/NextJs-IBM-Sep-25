import TODOS from "../mock-data/todos";

export default function TodosPage() {

    return <div className="m-20">
        {
            TODOS.map(todo => {
                return <section key={todo.id}>
                    <h1>Id : {todo.id} UserId: {todo.userId}</h1>
                    <h3>{todo.title}</h3>
                    <h4>{todo.completed ? "Completed" : "In Progress"}</h4>
                                    <hr/>

                </section>
            })
        }
    </div>
}