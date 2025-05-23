import {useState} from "react";

function Cart() {
    const [products, setProducts] = useState([
        {id: 1, name: "Iphone", quantity: 1000},
        {id: 2, name: "Samsung", quantity: 800},
        {id: 3, name: "Xiaomi", quantity: 1},
    ])
    const handleUpdateQuantity = (id, delta) => {
        setProducts((prevProducts) => prevProducts.map(
            item => item.id === id ? {...item, quantity: item.quantity + delta} : item
        ))
    }
    return(
        <>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <span>{product.name} - So luong: {product.quantity}</span>
                        <button onClick={()=>handleUpdateQuantity(product.id, 1)}>
                            +
                        </button>
                        <button onClick={()=>handleUpdateQuantity(product.id, -1)} disabled={product.quantity === 0}>
                            -
                        </button>
                    </div>
                ))
            }
        </>
    )
}
export default Cart