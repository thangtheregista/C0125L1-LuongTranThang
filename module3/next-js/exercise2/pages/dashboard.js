import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Dashboard() {
    const router =  useRouter()
    const [username, setUsername] = useState("")
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            const newTask = {
                id: Date.now(),
                name: task,
                completed: false
            }
            setTasks([...tasks, newTask])
            setTask("") // Clear the input field after adding the task
            localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]))
        }
    }
    const handleCheckboxChange = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task
        })
        setTasks(updatedTasks)
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    }
    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    }
    useEffect(() => {
        const user = localStorage.getItem("username")
        if (!user) {
            router.push("/")
        } else {
            setUsername(user)
        }
    }, []);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(storedTasks);
    }, []);
    return(
        <div>
            <Layout>
                <TaskList tasks={tasks} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete}/>
                <TaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
            </Layout>
        </div>
    )
}