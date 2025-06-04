import {Link} from "react-router-dom";

const ProductList = ({products}) => {

    return(
        <div>
            <ul>
                {
                    products.map((product)=> (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ProductList