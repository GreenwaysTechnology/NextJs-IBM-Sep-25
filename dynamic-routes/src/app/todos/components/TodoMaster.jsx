import TODOS from "@/app/mock-data/todos";
import Link from "next/link";

export default function TodosMaster() {

    return <div>
        <ul>
            {TODOS.map(todo => {
                return <li key={todo.id}>
                    <Link href={{ pathname: `/todos/${todo.id}` }}>
                        <span>
                            {todo.title}
                        </span>
                    </Link>
                </li>
            })}
        </ul>
    </div>
}