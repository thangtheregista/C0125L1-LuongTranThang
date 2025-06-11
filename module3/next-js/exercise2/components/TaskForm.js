export default function TaskForm({setTask, task, handleSubmit}) {
    return(
        <form onSubmit={handleSubmit}>
            <input type={"text"} placeholder={"Enter task"} name={"task"} value={task} onChange={(e)=> setTask(e.target.value)} />
            <button type={"submit"}>Add task</button>
        </form>
    )
}