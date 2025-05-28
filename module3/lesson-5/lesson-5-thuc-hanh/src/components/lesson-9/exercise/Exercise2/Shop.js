import React, {useEffect, useState} from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Shop = () => {
    const products = [
        {id: 1, name: "Iphone 14", price: 1000},
        {id: 2, name: "Iphone 15", price: 1200},
        {id: 3, name: "Iphone 16", price: 1400},
    ];
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([product,...cart ]);
    };
    useEffect(()=> {
        console.log("Cart updated:", cart);
    },[cart]);
    return (
        <>
            <ProductList products={products} addToCart={addToCart}/>
            <Cart cart={cart} />
        </>
    )
}
export default Shop;