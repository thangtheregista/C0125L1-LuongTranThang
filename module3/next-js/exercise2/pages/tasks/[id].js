import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function TaskDetail() {
    const router =  useRouter()
    const {id} = router.query
    const [task, setTask] = useState(null)
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
        const foundTask = savedTasks.find(task => task.id.toString() === id)
        setTask(foundTask)
    }, [id]);
    if (!task) {
        return <p>Loading task</p>
    }
    return(
        <div>
            <h1>{task.name}</h1>
            <input type={"checkbox"} checked={task.completed}/>
        </div>
    )
}