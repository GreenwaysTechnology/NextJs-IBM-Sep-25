// import TODOS from "../../mock-data/todos";
import TODOS from "@/app/mock-data/todos";
// import TodoItem from "./TodoItem";
import TodoItem from "@/app/todos/components/TodoItem";

export default function TodosList() {
    return <div className="m-20">
        {
            TODOS.map(todo => {
                return <section key={todo.id}>
                    <hr />
                    <TodoItem todo={todo} />
                </section>
            })
        }
    </div>
}