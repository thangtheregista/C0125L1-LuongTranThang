import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import Layout from "../components/Layout";

export default function Products() {
    const [username, setUsername] = useState("")
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({
        name: "",
        description:"",
        price:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProductForm((prev)=> (
            {...prev, [name]: value}
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!productForm.name || !productForm.description || !productForm.price) {
            alert("Please fill all fields");
            return;
        }
        const newProduct = {
            id: Date.now(),
            name: productForm.name,
            description: productForm.description,
            price: productForm.price
        }
        setProducts([...products, newProduct]);
        localStorage.setItem("products", JSON.stringify([...products, newProduct]));
        setProductForm({
            name: "",
            description: "",
            price: ""
        });
    }
    const router = useRouter();
    useEffect(() => {
        const user = localStorage.getItem("username");
        if (!user) {
            router.push("/");
        } else {
            setUsername(user)
        }
    }, []);
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
        setProducts(savedProducts)
    }, []);
    return(
        <div>
            <Layout>
                <ProductList products={products}/>
                <ProductForm handleSubmit={handleSubmit} productForm={productForm} handleChange={handleChange} />
            </Layout>
        </div>
    )
}