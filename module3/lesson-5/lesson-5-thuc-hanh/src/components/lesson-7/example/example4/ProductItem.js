import React from "react";

function ProductItem({products, onVote}) {

    return(
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - Vote: {product.vote}
                <button onClick={()=>{onVote(product.id)}}>Vote</button>
                </li>
            ))}


        </ul>
    )
}
export default ProductItem