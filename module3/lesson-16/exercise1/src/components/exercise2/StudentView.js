import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function StudentView() {
    const [student, setStudent] = useState([])
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
    return(
        <div>
            <h1>Student View</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{student.name}</Card.Title>
                    <Card.Text>
                        {student.age}
                    </Card.Text>
                    <Card.Text>
                        {student.email}
                    </Card.Text>
                    <Card.Text>
                        {student.major}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}