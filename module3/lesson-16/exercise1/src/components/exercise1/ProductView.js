import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

export default function ProductView() {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct();
    }, [id]);
    return(
        <div>
            <h1>Product View</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}