import "./navbar.css"
import { FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="main-nav">
            <div className="main-nav-wrapper">
                <ul className="nav-links">
                    <li className="is-active"><a href="#"><FaHome className="home-icon" />TRANG CHỦ</a></li>
                    <li><a href="#">VỀ CHÚNG TÔI</a></li>
                    <li><a href="#">SẢN PHẨM <span>▼</span></a></li>
                    <li><a href="#">TIN TỨC <span>▼</span></a></li>
                    <li><a href="#">LIÊN HỆ</a></li>
                </ul>
                <div className="hotline">
                    <img src="https://img.icons8.com/ios-filled/24/ffffff/phone.png" alt="Phone Icon"/>
                    <span>Hotline: 1900 6750</span>
                </div>
            </div>
        </nav>
    )
}