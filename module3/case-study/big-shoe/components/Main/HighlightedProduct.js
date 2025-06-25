import {FaGear, FaMagnifyingGlassPlus} from "react-icons/fa6";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

export default function HighlightedProduct() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products?is_featured=true")
            setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return(
        <div className="product-section">
            <div className="section-header">
                <span>SẢN PHẨM NỔI BẬT</span>
                {/*<div className="nav-arrows">*/}
                {/*    <span>❮</span>*/}
                {/*    <span>❯</span>*/}
                {/*</div>*/}
            </div>

            <div className="product-list">
                {products.map(product=> (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        discount_price={product.discount_price}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}