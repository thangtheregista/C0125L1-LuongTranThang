import {useState} from "react";
import {useRouter} from "next/router";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const route = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            localStorage.setItem("username", username)
            route.push("/dashboard")
        }
    }
    return(
        <div>
            <h1>Day la form login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Nhap ten"
                    onChange={(e)=> setUsername(e.target.value)}
                />
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}