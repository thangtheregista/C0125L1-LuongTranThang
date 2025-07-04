import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ProductDetail() {
    const {id} = useParams()
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchProduct();
    }, [id]);
    return(

        <Card style={{width: "20%", margin: "50px auto"}}>
            <Card.Header>Chi tiết sản phẩm</Card.Header>
            <Card.Body>
                <Card.Title>Tên sản phẩm: {product.title}</Card.Title>
                <Card.Text>
                    Mô tả: {product.description}
                </Card.Text>
                <Card.Text>
                    Giá: {Number(product.price).toLocaleString("vi-VN") + " VND"}
                </Card.Text>
                <Link to={`/`}>
                    <Button variant="primary">Trở lại</Button>
                </Link>
            </Card.Body>
        </Card>

    )
}