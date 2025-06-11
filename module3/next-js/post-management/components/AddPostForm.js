import {useState} from "react";

export default function AddPostForm({addPost} ) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !content) {
            return
        }
        addPost(title, content);
        setTitle('');
        setContent('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Enter post title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    name="content"
                    value={content}
                    placeholder="Enter post content"
                    onChange={(e) => setContent(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </div>
        </form>

    )
}