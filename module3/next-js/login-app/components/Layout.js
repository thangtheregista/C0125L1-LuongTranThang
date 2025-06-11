import Link from "next/link";

export default function Layout({children}) {
    return(
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/login">Log out</Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}