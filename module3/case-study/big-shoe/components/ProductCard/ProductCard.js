import {FaGear, FaMagnifyingGlassPlus} from "react-icons/fa6";
import "./productcard.css"
export default function ProductCard({product, handleShowModal}) {
    const USD_TO_VND = 25000;
    const discount_priceVND= product.discount_price * USD_TO_VND;
    const priceVND= product.price * USD_TO_VND;
    return(
        <div className="product-card">
            <div className="discount-badge">-14%</div>
            <div className="image-wrapper">
                <img
                    src={product.images[0]}
                    alt={product.name}/>
                <div className="product-options">
                    <button><FaGear/> Tùy chọn</button>
                    <button onClick={(e)=> handleShowModal(product.id)}><FaMagnifyingGlassPlus/> Xem nhanh</button>
                </div>
            </div>

            <h4>{product.name}</h4>
            <div className="price">
                <span className="new-price">{discount_priceVND.toLocaleString('vi-VN')}đ</span>
                <span className="old-price">{priceVND.toLocaleString('vi-VN')}đ</span>
            </div>

        </div>
    )
}