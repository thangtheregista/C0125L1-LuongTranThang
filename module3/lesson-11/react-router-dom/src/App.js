import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import MainLayout from "./components/MainLayout";
import Exercise1 from "./components/exercise/Exercise1";
import Exercise2 from "./components/exercise/exercise2/Exercise2";

function App() {
    return (
        <div>
            {/*<h1>*/}
            {/*    dieu huong router trong reactjs co ban*/}
            {/*</h1>*/}
            {/*<nav>*/}
            {/*    <NavLink to="/product">Product</NavLink>*/}
            {/*    <NavLink to="/home">Home</NavLink>*/}
            {/*    <NavLink to="/contact">Contact</NavLink>*/}
            {/*</nav>*/}
            {/*<Routes>*/}
            {/*    <Route index element={<Product/>}/>*/}
            {/*    <Route path="/home" element={<Home/>}/>*/}
            {/*    <Route path="/product" element={<Product/>}/>*/}
            {/*    <Route path="/contact" element={<Contact/>}/>*/}
            {/*    <Route path='*' element={<h1>Page not found</h1>} />*/}
            {/*</Routes>*/}
            {/*<h1>nested route</h1>*/}
            {/*<nav>*/}
            {/*    <NavLink to="/home">Home</NavLink>*/}
            {/*    <NavLink to="/main">Main</NavLink>*/}
            {/*</nav>*/}
            {/*<Routes>*/}
            {/*    <Route path="/home" element={<Home/>}/>*/}
            {/*    <Route path="/main" element={<MainLayout/>}>*/}
            {/*        <Route index element={<Home/>}/>*/}
            {/*        <Route path="/main/product" element={<Product/>}/>*/}
            {/*        <Route path="/main/contact" element={<Contact/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            <Exercise1/>
            <Exercise2/>
        </div>
    );
}

export default App;
