import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
export default function ProductEdit() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/products/${id}`);
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }
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
            await axios.put(`http://localhost:3001/products/${id}`, product);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [id]);
    return(
        <div>
            <h1>Edit a product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={product.name} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" name="price" value={product.price} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" c>
                    <Form.Label>Enter description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" name="description" value={product.description} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" c>
                    <Form.Label>Enter image URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter image URL" name="imageUrl" value={product.imageUrl} onChange={handleChange} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit
                </Button>
            </Form>
        </div>
    )
}