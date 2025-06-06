import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import MainLayout from "./MainLayout";
import Product from "./Product";
import Contact from "./Contact";
import Detail from "./Detail";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Exercise3 = () => {
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => (isActive ? ' active' : 'inactive')} to="/main">
                                Main
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route index path="/" element={<Navigate to="/main" replace />}></Route>
                <Route path="/main" element={<MainLayout/>}>
                    <Route index path="/main" element={<Navigate to="/main/product" replace />}></Route>

                    <Route path="/main/product" element={<Product/>}></Route>
                    <Route path="/main/contact" element={<Contact/>}></Route>
                    <Route path="/main/detail" element={<Detail/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}
export default Exercise3