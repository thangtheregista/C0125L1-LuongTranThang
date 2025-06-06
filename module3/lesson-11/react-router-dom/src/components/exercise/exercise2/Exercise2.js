import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Exercise2 = () => {
    const products = [
        {
            id:101, name: "laptop"
        },
        {
            id:102, name:"phone"
        },

    ]
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink className={({ isActive }) => (isActive ? ' active' : 'inactive')} to="/product">Product list</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route index path="/" element={<Navigate to="/product" replace />}></Route>
                <Route path="/product" element={<ProductList products={products}/>}></Route>
                <Route path="/product/:id" element={<ProductDetail products={products} />}></Route>
            </Routes>
        </div>
    )
}
export default Exercise2