import {NavLink, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
//CSS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Exercise1 = () => {
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <NavLink className={({ isActive }) => (isActive ? ' active' : 'inactive')} to="/home">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className={({ isActive }) => (isActive ? ' active' : 'inactive')} to="/about">About</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className={({ isActive }) => (isActive ? ' active' : 'inactive')} to="/contact">Contact</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route index path="/" element={<Navigate to="/home" replace />}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </div>
    )
}
export default Exercise1