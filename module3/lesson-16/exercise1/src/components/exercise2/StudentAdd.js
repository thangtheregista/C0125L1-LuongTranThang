import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from "react-router-dom";
import axios from "axios";


export default function StudentAdd() {
    const navigate =  useNavigate()
    const [student, setStudent] = useState([])
    const handleChange = (e) => {
        const {name, value} = e.target;
        setStudent({
            ...student,
            [name] : value
        })
    }
    const handleSubmit =  async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/students", {
                ...student,
                id : uuidv4
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Add a student</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" name="age" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter major</Form.Label>
                    <Form.Control type="text" placeholder="Enter major" name="major" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}