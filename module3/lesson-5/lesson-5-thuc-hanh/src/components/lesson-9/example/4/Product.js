import {useEffect, useState} from "react";
import ProductList from "./ProductList";
import SelectedProduct from "./SelectedProduct";

const Product = () => {
    const products = [
        {id: 1, name: "Iphone 14", price: 1000},
        {id: 2, name: "Iphone 15", price: 1200},
        {id: 3, name: "Iphone 16", price: 1400},
    ];
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [discountPrice, setDiscountPrice] = useState(null);
    useEffect(() => {
        if (selectedProduct) {
            const timeout = setTimeout(() => {
                const discount = Math.random() * 0.3
                const newPrice = selectedProduct.price * (1 - discount);
                setDiscountPrice(newPrice.toFixed(2));
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [selectedProduct]);
    return(
        <>
            <ProductList products={products} setSelectedProduct={setSelectedProduct}/>
            <SelectedProduct selectedProduct={selectedProduct} discountPrice={discountPrice}/>
        </>
    )
}
export default Product