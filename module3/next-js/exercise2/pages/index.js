import {useState} from "react";
import {useRouter} from "next/router";

export default function Home() {
    const [username, setUsername] = useState("")
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            localStorage.setItem("username", username)
            router.push("/dashboard")
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your username" onChange={(e)=> setUsername(e.target.value)} />
                <button type="submit" >
                    Login
                </button>
            </form>
        </div>
    )
}