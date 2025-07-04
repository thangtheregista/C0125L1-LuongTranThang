import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from "react-router-dom";

export default function ProductAdd() {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/products", {
                id: uuidv4(),
                ...product
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
        setProduct({
            name: "",
            price: "",
            description: "",
            imageUrl: ""
        });
    }
    return (
        <div>
            <h1>Add a product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" name="price" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" name="description" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter image URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter image URL" name="imageUrl" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}