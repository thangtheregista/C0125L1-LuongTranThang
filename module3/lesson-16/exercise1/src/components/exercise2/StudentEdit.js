import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function StudentEdit() {
    const [student, setStudent] = useState([]);
    const navigate = useNavigate()
    const {id} = useParams()
    const fetchStudent = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/students/${id}`);
            setStudent(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchStudent()
    }, [id]);
    const handleChange = (e) => {
        const {name, value} = e.target
        setStudent({
            ...student,
            [name] : value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3001/students/${id}`, student);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h1>Edit a student</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={student.name} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" name="age" value={student.age} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" c>
                    <Form.Label>Enter email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" value={student.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" c>
                    <Form.Label>Enter major</Form.Label>
                    <Form.Control type="text" placeholder="Enter major" name="major" value={student.major} onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit
                </Button>
            </Form>
        </div>
    )
}