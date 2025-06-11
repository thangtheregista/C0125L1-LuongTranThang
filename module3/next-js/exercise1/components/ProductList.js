import Link from "next/link";

export default function ProductList({products}) {
    return(
        <div>
            <h1>
                Products page
            </h1>
            <ul>
                {products.map((product)=> (
                    <li key={product.id} >
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}