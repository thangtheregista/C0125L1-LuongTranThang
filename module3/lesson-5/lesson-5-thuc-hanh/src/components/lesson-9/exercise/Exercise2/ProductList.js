import React from "react";

const ProductList = ({ products, addToCart }) => {
    return(
        <div>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button onClick={()=>{
                        addToCart(product);
                    }}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}
export default ProductList