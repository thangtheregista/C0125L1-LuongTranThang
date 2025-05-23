import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todo = (props) => {
    const [tasks, setTasks] = useState([
        "Hoc JS",
        "Hoc React",
    ])
    const [task, setTask] = useState("")
    const handleAddNewTask = (newTask) => {
        setTasks((prevTasks)=> [newTask,...prevTasks])
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (task.trim()==="") {
            return;
        }
        handleAddNewTask(task);
        setTask("");
    }
    return(
        <div>
            <TodoForm handleSubmitForm={handleSubmitForm} setTask={setTask} task={task}/>
            <TodoList tasks={tasks}/>

        </div>
    )
}
export default Todo