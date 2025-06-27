import "./categories.css"
import { IoMdArrowDropright } from "react-icons/io";
import {useEffect, useState} from "react";
import axios from "axios";


export default function Categories() {
    const [categories, setCategories] = useState([])
    const [unisexBrands, setUnisexBrands] = useState([])
    const [menBrands, setMenBrands] = useState([])
    const [womenBrands, setWomenBrands] = useState([])
    const categoryMap = {
        "Running": "Giày Chạy bộ",
        "Casual": "Giày Đi chơi",
        "Lifestyle": "Giày Lifestyle",
        "Sneakers": "Giày sneaker",
        "Skate": "Giày Trượt ván",
        "Tennis": "Giày Chơi Quần vợt",
        "Luxury": "Giày Cao cấp",
        "Walking": "Giày Đi bộ",
        "Basketball": "Giày Chơi Bóng rổ"
    };
    const vietnameseCategories = categories.map(cat => categoryMap[cat] || cat);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products")
            const categoriesList = [...new Set(response.data.map(product => product.category))]
            setCategories(categoriesList)
            console.log(categoriesList)
            const menProducts = response.data.filter(product => product.gender === "Men")
            const menBrandsList = [...new Set(menProducts.map(product => product.brand))]
            setMenBrands(menBrandsList)
            const womenProducts = response.data.filter(product=> product.gender === "Women")
            const womenBrandsList = [...new Set(womenProducts.map(product => product.brand))]
            setWomenBrands(womenBrandsList)
            const unisexProducts = response.data.filter(product => product.gender === "Unisex")
            const unisexBrandsList = [...new Set(unisexProducts.map(product => product.brand))]
            setUnisexBrands(unisexBrandsList)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCategories()
    }, []);
    return (
        <div className="sidebar-menu">
            <div className="menu-header">
                <span className="menu-icon">☰</span>
                DANH MỤC SẢN PHẨM
            </div>
            <ul className="menu-list">
                <li><a href="#">Sản phẩm mới</a></li>
                <li><a href="#">Sản phẩm nổi bật</a></li>
                <li>
                    <a href="#">Giày nam <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        {menBrands.map((brand, index) => (
                            <li key={index}><a href="#">{brand}</a></li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#">Giày nữ <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        {womenBrands.map((brand, index)=> (
                            <li key={index}><a href="#">{brand}</a></li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a href="#">Giày unisex <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        {unisexBrands.map((brand, index)=> (
                            <li key={index}><a href="#">{brand}</a></li>
                        ))}
                    </ul>
                </li>
                {vietnameseCategories.map((category, index)=> (
                    <li key={index}><a href="#">{category}</a></li>
                ))}

                {/*<li><a href="#" className="more-link">Xem thêm ...</a></li>*/}
            </ul>
        </div>
    )
}