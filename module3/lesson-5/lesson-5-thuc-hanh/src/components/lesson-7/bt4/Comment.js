import React, {useState} from "react";

function Comment() {
    const [comments, setComments] = useState([
        {name: "Nguyen Van A", content: "Hello"},
        {name: "Nguyen Van B", content: "Hello"},
        {name: "Nguyen Van C", content: "Hello"},
    ])
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const handleNameChange = (name) => {
        setName(name);
    }
    const handleCommentChange = (comment) => {
        setComment(comment);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setComments((prevComment) => [{name: name, content: comment},...prevComment])
        setName("");
        setComment("");
    }
    return(
        <div>
            <ul>
                {
                    comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.name}</strong>: {comment.content}
                        </li>
                    ))
                }
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onChange={(e) => handleNameChange(e.target.value)} value={name}/>
                    <input type="text" placeholder="Comment" onChange={(e) => handleCommentChange(e.target.value)} value={comment}/>
                    <button type="submit">Submit</button>
                </form>
            </ul>
        </div>
    )
}
export default Comment