import React, {useEffect} from "react";

const TodoApp = () => {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const handleOnClick = (newTodo) => {
        setTodos((prevTodos) => [newTodo,...prevTodos]);
        setTodo("");
    }
    useEffect(() => {
        console.log("Da them viec thanh cong");
    }, [todos]);
    return(
        <div>
            <input type="text" onChange={(event)=> {
                setTodo(event.target.value);
            }}
            value={todo}
            />
            <button onClick={(e)=> handleOnClick(todo)}>Add</button>
            <ul>
                {
                    todos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoApp;