import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            localStorage.setItem("username", username)
            router.push("/products")
        }
    }
    useEffect(() => {
        if (localStorage.getItem("username")) {
            router.push("/products")
        }
    }, []);
    return(
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your username" onChange={(e)=> setUsername(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}