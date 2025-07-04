import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table';

import Swal from 'sweetalert2';

import "./product.css"

export default function Product() {
    const showAlert = async (id) => {
        const result = await Swal.fire({
            title: 'Xác nhận?',
            text: 'Bạn chắc chắn muốn xóa sản phẩm này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/products/${id}`);
                Swal.fire('Đã xóa!', 'Sản phẩm đã bị xóa.', 'success');
                fetchProducts();
            } catch (error) {
                console.log(error);
            }
        }
    };
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (id) => {
        if (window.confirm("You are sure delete this product?")) {
            try {
                await axios.delete(`http://localhost:3000/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);
    return (
        <div className="div-wrapper">
            <h1>
                Danh sách sản phẩm
            </h1>
            <Link to={`products/add`}>
                <Button variant="success">Thêm mới</Button>

            </Link>
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/products/${product.id}`}>
                                        {product.title}
                                    </Link>
                                </td>
                                <td>{product.description}</td>
                                <td>{Number(product.price).toLocaleString('vi-VN')}</td>
                                <td>
                                    <Button variant="danger" onClick={() => showAlert(product.id)}>Xoá</Button>

                                    <Link to={`/products/edit/${product.id}`}>
                                        <Button variant="primary">Sửa</Button>
                                    </Link> {" "}

                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}