import React from "react";

function Exercise12() {
    const product = {
        name: "Iphone 14",
        price: "2000$",
    }
    const productElement = (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
    return(
        <>
            {productElement}
        </>
    )
}
export default Exercise12