import React, {useState} from "react";
import ProductItem from "./ProductItem";

const Product = () => {
    let [products, setProducts] = useState([
        {id: 1, name: "Iphone", vote: 0},
        {id: 2, name: "Samsung", vote: 0},
        {id: 3, name: "Nokia", vote: 0},

    ]);
    const handleVote = (id) => {
        setProducts(
            (prev) => prev.map(
                (product) => product.id === id ? {...product, vote: product.vote + 1} : product
            )
        )
    }
    return (
        <div>
            <h1>binh chon san pham</h1>
            <ProductItem products={products} onVote={handleVote}/>
        </div>
    )
}
export default Product