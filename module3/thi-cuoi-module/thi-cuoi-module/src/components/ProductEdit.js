import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ProductEdit() {
    const {id} = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
        console.log(product);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/products/${id}`, product);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="div-wrapper">
            <h1 className="text-center">Sửa sản phẩm</h1>
            <Form style={{width: "60%", margin: "0 auto"}} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control type="text" placeholder="Type name..." value={product.title} name="name"
                                  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Giá</Form.Label>
                    <Form.Control type="text" placeholder="Type price..." value={product.price} name="price"
                                  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mô tả </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type description" value={product.description} name="description" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Sửa</Button>
                <Link to={`/`}>
                    <Button variant="info">Trở lại</Button>
                </Link>
            </Form>
        </div>
    )
}