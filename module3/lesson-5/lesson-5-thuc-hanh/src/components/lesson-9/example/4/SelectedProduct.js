const SelectedProduct = ({ selectedProduct,discountPrice }) => {
    return(
        <div>
            {
                selectedProduct && (
                    <div>
                        <h2>Chi tiet san pham</h2>
                        <p>Tên sản phẩm: {selectedProduct.name}</p>
                        <p>Giá gốc: {selectedProduct.price}$</p>
                        <p>Gia sale: {
                            discountPrice ? `${discountPrice}$` : 'Đang tính giá sale...'
                        }$ </p>
                    </div>
                )
            }
        </div>

    )
}
export default SelectedProduct;