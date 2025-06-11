import Link from "next/link";
import {useRouter} from "next/router";

export default function Layout({children}) {
    const router = useRouter()
    const handleLogout = (e) => {
        localStorage.removeItem("username")
        router.push("/")
    }
    return(
        <div>
            <nav>
                <Link href="/dashboard">Dashboard</Link>
                <a href="/" onClick={(e)=> handleLogout(e)}>Log out</a>
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}