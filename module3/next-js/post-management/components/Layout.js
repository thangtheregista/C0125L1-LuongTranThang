import Link from "next/link";

export default function Layout({children}) {
    return(
        <div>
            <nav>
                <Link href="/dashboard">

                </Link>
                <Link href="/logout">
                    Log out
                </Link>

            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}