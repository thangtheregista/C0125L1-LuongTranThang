import "./productbox.css"
export default function ProductBox() {
    return(
        <div className="sidebar-menu">
            <div className="menu-header">

                SẢN PHẨM NỔI BẬT
            </div>
            <ul className="product-box">
                <li className="product-item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487" alt="Giày da Converse cao cấp"/>
                    <div>
                        <p>Giày da Converse cao cấp</p>
                        <div className="price">
                            <span className="new-price">1.200.000₫</span>
                            <span className="old-price">1.400.000₫</span>
                        </div>
                    </div>
                </li>

                <li className="product-item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487" alt="Giày vải Converse 3"/>
                    <div>
                        <p>Giày vải Converse 3</p>
                        <div className="price">
                            <span className="new-price">700.000₫</span>
                            <span className="old-price">800.000₫</span>
                        </div>
                    </div>
                </li>

                <li className="product-item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487" alt="Giày Converse cao cấp"/>
                    <div>
                        <p>Giày Converse cao cấp</p>
                        <div className="price">
                            <span className="new-price">450.000₫</span>
                            <span className="old-price">600.000₫</span>
                        </div>
                    </div>
                </li>

                <li className="product-item">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487" alt="Giày vải Star Floral Crochet"/>
                    <div>
                        <p>Giày vải Star Floral Crochet</p>
                        <div className="price">
                            <span className="new-price">600.000₫</span>
                            <span className="old-price">750.000₫</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}