import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ShoeDetail() {
    const router = useRouter()
    const {id} = router.query
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://685bfac189952852c2dbbe40.mockapi.io/products/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [id]);
    return(
        <div>
            {product.name}
        </div>
    )
}