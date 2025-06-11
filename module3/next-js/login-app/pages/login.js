import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter()
    return(
        <div>

            <form>
                <input type="text" />
                <input type="password" />
                <button type="button" onClick={()=> {
                    router.push('/')
                }}>
                    Dang nhap
                </button>
            </form>
        </div>
    )
}