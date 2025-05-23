import {useState} from "react";
import CartItem from "./CartItem";

function Cart(){
    const [items, setItems] = useState([
        {
            id: 1,
            name: "ao thun",
            price: 150000,
            quantity: 1
        },
        {
            id: 2,
            name: "quan bo",
            price: 300000,
            quantity: 5
        },
        {
            id: 3,
            name: "quan baggy",
            price: 450000,
            quantity: 3
        }
    ])
    const handleChangeQuantity = (id, newQuantity) => {
        setItems((prev) => prev.map((item) => item.id === id ? {...item, quantity: newQuantity} : item))
    }
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)
    return(
        <>
            <h1>Gio hang</h1>
            {
                items.map((item) => (
                    <CartItem onChangeQuantity={handleChangeQuantity} key={item.id} item={item}/>
                ))
            }
            <h1>
                tong tien la: {totalPrice.toLocaleString()}d
            </h1>
        </>
    )
}
export default Cart