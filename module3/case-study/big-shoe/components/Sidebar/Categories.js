import "./categories.css"
import { IoMdArrowDropright } from "react-icons/io";


export default function Categories() {
    return (
        <div className="sidebar-menu">
            <div className="menu-header">
                <span className="menu-icon">☰</span>
                DANH MỤC SẢN PHẨM
            </div>
            <ul className="menu-list">
                <li><a href="#">Bộ sưu tập mới</a></li>
                <li>
                    <a href="#">Giày thời trang nam <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        <li><a href="#">Giày da</a></li>
                        <li><a href="#">Giày vải</a></li>
                        <li><a href="#">Giày Converse</a></li>
                        <li><a href="#">Giày Vans</a></li>
                        <li><a href="#">Giày Lacoste</a></li>
                        <li><a href="#">Giày D&G</a></li>
                        <li><a href="#">Giày Bata</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Giày thời trang nữ <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        <li><a href="#">Giày Converse</a></li>
                    </ul>
                </li>
                <li><a href="#">Giày mùa hè</a></li>
                <li><a href="#">Giày công sở</a></li>
                <li><a href="#">Giày thể thao</a></li>
                <li><a href="#">Giày đi chơi</a></li>
                <li><a href="#">Giày trẻ em</a></li>
                <li><a href="#">Giày</a></li>
                {/*<li><a href="#" className="more-link">Xem thêm ...</a></li>*/}
            </ul>
        </div>
    )
}