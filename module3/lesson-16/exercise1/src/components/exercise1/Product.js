import {useState, useEffect} from 'react';
import axios from 'axios';
import {Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

export default function Product() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products");
            setProducts(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`http://localhost:3001/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.log(error);
            }
        }

    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return(
        <div>
            <Typography variant={"h1"} >
                Product List
            </Typography>
            <Link to={"/add"}><button>Add a product</button></Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index +1}
                                </TableCell>
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{product.description}</TableCell>
                                <TableCell align="right">
                                    <Link to={`view/${product.id}`}><button>View</button></Link>
                                    <Link to={`edit/${product.id}`}><button>Edit</button></Link>
                                    <button onClick={()=> handleDelete(product.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}