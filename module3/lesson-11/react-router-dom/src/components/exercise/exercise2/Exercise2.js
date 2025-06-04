import {NavLink, Route, Routes} from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

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
            <nav>
                <NavLink to="/product/">Product list</NavLink>
            </nav>
            <Routes>
                <Route path="/product" element={<ProductList products={products}/>}>

                </Route>
                <Route path="/product/:id" element={<ProductDetail products={products} />}></Route>
            </Routes>
        </div>
    )
}
export default Exercise2