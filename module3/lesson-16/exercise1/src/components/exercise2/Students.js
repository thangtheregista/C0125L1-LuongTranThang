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

export default function Students() {
    const [students, setStudents] = useState([])
    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://localhost:3001/students")
            setStudents(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchStudents()
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try  {
                await axios.delete(`http://localhost:3001/students/${id}`);
                fetchStudents();
            } catch (error) {
                console.log(error);
            }
        }
    }
    return(
        <div>
            <Typography variant={"h1"} >
                Student List
            </Typography>
            <Link to={"/add"}><button>Add a student</button></Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Major</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, index) => (
                            <TableRow
                                key={student.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index +1}
                                </TableCell>
                                <TableCell align="right">{student.name}</TableCell>
                                <TableCell align="right">{student.age}</TableCell>
                                <TableCell align="right">{student.email}</TableCell>
                                <TableCell align="right">{student.major}</TableCell>
                                <TableCell align="right">
                                    <Link to={`view/${student.id}`}><button>View</button></Link>
                                    <Link to={`edit/${student.id}`}><button>Edit</button></Link>
                                    <button onClick={()=> handleDelete(student.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}