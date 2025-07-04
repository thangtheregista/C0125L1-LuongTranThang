import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function ProductAdd() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/products/", {
                id: uuidv4(),
                ...product
            })

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <div className="div-wrapper">
                <h1 className="text-center">Thêm sản phẩm</h1>
                <Form style={{width: "60%", margin: "0 auto"}} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" name="title" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Giá</Form.Label>
                        <Form.Control type="text" name="price" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mô tả </Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Thêm</Button>
                    <Link to={`/`}>
                        <Button variant="info">Trở lại</Button>
                    </Link>
                </Form>
            </div>
        </div>
    )
}