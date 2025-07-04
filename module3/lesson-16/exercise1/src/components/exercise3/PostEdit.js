import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export default function PostEdit() {
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/posts/${id}`);
            setPost(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost({
            ...post,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3001/posts/${id}`, post);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPost()
    }, []);
    return(
        <div>
            <h1>Edit a post</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={post.title} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter content</Form.Label>
                    <Form.Control type="text" placeholder="Enter content" name="content" value={post.content} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" c>
                    <Form.Label>Enter author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author" name="author" value={post.author} onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit
                </Button>
            </Form>
        </div>
    )
}