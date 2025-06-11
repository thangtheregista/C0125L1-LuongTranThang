import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products") || "[]")
        const foundProduct = savedProducts.find(product => product.id.toString() === id )
        setProduct(foundProduct)
    }, [id]);
    if (!product) {
        return <p>Loading product</p>
    }
    return(
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={()=> router.back()}>Back</button>
        </div>
    )
}