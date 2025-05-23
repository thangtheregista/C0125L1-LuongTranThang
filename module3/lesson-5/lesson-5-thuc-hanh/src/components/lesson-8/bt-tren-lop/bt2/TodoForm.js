const TodoForm = ({handleSubmitForm , setTask, task}) => {

    return(
        <>
            <form action="" onSubmit={handleSubmitForm}>
                <input type="text" placeholder="Type todo..."
                       onChange={(e) => {setTask(e.target.value)}} value={task}/>
            </form>
        </>
    )
}

export default TodoForm