import {FaGear, FaMagnifyingGlassPlus} from "react-icons/fa6";
import "./productcard.css"
export default function ProductCard({name, discount_price, price}) {
    return(
        <div className="product-card">
            <div className="discount-badge">-14%</div>
            <div className="image-wrapper">
                <img
                    src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487"
                    alt="Giày da Converse cao cấp"/>
                <div className="product-options">
                    <button><FaGear/> Tùy chọn</button>
                    <button><FaMagnifyingGlassPlus/> Xem nhanh</button>
                </div>
            </div>

            <h4>{name}</h4>
            <div className="price">
                <span className="new-price">{discount_price} $</span>
                <span className="old-price">{price} $</span>
            </div>

        </div>
    )
}