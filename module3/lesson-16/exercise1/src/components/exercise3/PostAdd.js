import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function PostAdd() {
    const [post, setPost ]= useState([
        {
            title:"",
            content:"",
            author: "",
            createdAt: ""
        }
    ])
    const navigate = useNavigate()
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost({
            ...post,
            [name] : value
        })
    }
    const handleSubmit =  async (e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/posts", {
                ...post,
                id: uuidv4(),
                createdAt: new Date().toString()
            })
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Add a post</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter content</Form.Label>
                    <Form.Control type="text" placeholder="Enter content" name="content" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author" name="author" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}