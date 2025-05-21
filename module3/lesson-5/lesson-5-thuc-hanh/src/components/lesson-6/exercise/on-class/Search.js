import React from "react";
import SearchBox from "./SearchBox";

const Search = () => {
    const products =["Iphone", "Samsung", "Oppo", "Xiaomi"];
    const handleSearch = (keyword) => {
        const productResult = products.filter((product) =>
            product.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
        )
        console.log(productResult)
    }
    return (
        <div>
            <SearchBox handleSearch={handleSearch}/>
        </div>
    );
}
export default Search