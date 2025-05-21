import React from "react";

const CountrySelector = ({handleSelectCountry}) => {

    return(
        <>
            <select name="" id="" onChange={(e)=>handleSelectCountry(e.target.value)}>
                <option value="VN">Vietnam</option>
                <option value="EN">English</option>
                <option value="JP">Japan</option>
            </select>
        </>
    )
}

export default CountrySelector