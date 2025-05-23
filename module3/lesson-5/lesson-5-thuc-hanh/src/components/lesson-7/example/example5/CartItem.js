function CartItem({item, onChangeQuantity}) {
    return(
        <>
            <div>
                {item.name} - Gia: {item.price}
                <input type="number" value={item.quantity} onChange={(e)=>onChangeQuantity(item.id, parseInt(e.target.value))}/>
            </div>
        </>
    )
}

export default CartItem;