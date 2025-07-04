import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () =>  {
        try {
            const response =  await axios.get("http://localhost:3001/posts");
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await axios.delete(`http://localhost:3001/posts/${id}`);
                fetchPosts();
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <div>
            <Typography variant={"h1"} >
                Post List
            </Typography>
            <Link to={"/add"}><button>Add a post</button></Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Content</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post, index) => (
                            <TableRow
                                key={post.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index +1}
                                </TableCell>
                                <TableCell align="right">{post.title}</TableCell>
                                <TableCell align="right">{post.content}</TableCell>
                                <TableCell align="right">{post.author}</TableCell>
                                <TableCell align="right">{post.createdAt}</TableCell>
                                <TableCell align="right">
                                    <Link to={`view/${post.id}`}><button>View</button></Link>
                                    <Link to={`edit/${post.id}`}><button>Edit</button></Link>
                                    <button onClick={()=> handleDelete(post.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}