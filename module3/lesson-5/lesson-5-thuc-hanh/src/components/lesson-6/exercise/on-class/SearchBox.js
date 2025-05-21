import React from "react";

const SearchBox = ({handleSearch}) => {


    return (
        <div>
            <input type="text" placeholder="Nhap ten san pham" onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
    );
}

export default SearchBox;