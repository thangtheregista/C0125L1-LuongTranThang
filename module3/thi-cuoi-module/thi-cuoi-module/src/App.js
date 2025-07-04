import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Route, Routes} from "react-router-dom";
import Product from "./components/Product";
import ProductAdd from "./components/ProductAdd";
import ProductDetail from "./components/ProductDetail";
import ProductEdit from "./components/ProductEdit";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Product />}></Route>
            <Route path='products/add' element={<ProductAdd />}></Route>
            <Route path='products/:id' element={<ProductDetail />}></Route>
            <Route path='products/edit/:id' element={<ProductEdit />}></Route>
        </Routes>
    );
}

export default App;
