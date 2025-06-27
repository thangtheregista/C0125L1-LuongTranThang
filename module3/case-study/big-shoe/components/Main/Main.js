import ProductSection from "./ProductSection";
import DiscountedProduct from "./DiscountedProduct";
import "./main.css"
import HighlightedProduct from "./HighlightedProduct";
import { IoMdCloseCircle } from "react-icons/io";
import ProductModal from "../Modal/ProductModal";
import {useState} from "react";
import axios from "axios";

export default function Main() {
    const [product, setProduct] = useState([])
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = async (id) => {
        try {
            const response = await axios.get(`https://685bfac189952852c2dbbe40.mockapi.io/products/${id}`)
            setProduct(response.data)
            setShowModal(true)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="main">
            <ProductSection handleShowModal={handleShowModal} />
            <HighlightedProduct handleShowModal={handleShowModal}/>
            {showModal && (
                <ProductModal product={product} setShowModal={setShowModal}/>
            )}
        </div>
    )
}