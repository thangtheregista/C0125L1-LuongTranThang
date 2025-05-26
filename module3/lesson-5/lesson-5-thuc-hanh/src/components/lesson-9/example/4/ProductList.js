const ProductList = ({products,setSelectedProduct}) => {

    return(
        <div className="list-products">
            <h1>Danh sach users</h1>
            <ul>
                {
                    products.map((product) => (
                        <li onClick={()=> setSelectedProduct(product)} key={product.id}>{product.name} - gia {product.price}$</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ProductList