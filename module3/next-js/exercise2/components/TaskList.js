import Link from "next/link";

export default function TaskList({tasks, handleCheckboxChange, handleDelete} ) {
    return(
        <div>
            <h2>Task list</h2>
            <ul>
                {tasks.map((task)=> (
                    <li key={task.id}>
                        <Link href={`/tasks/${task.id}`}>{task.name}</Link>
                        <input type={"checkbox"} checked={task.completed} onChange={(e)=> handleCheckboxChange(task.id)}/>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}