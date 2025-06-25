import ProductSection from "./ProductSection";
import DiscountedProduct from "./DiscountedProduct";
import "./main.css"
import HighlightedProduct from "./HighlightedProduct";
export default function Main() {
    return (
        <div className="main">
            <ProductSection/>
            {/*<DiscountedProduct/>*/}
            <HighlightedProduct/>
        </div>
    )
}