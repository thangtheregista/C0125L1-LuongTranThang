import React from "react";
import CountrySelector from "./CountrySelector";

const Select = (props) => {
    const handleSelectCountry = (code) => {
        const greeting = {
            VN: "Xin chào",
            EN: "Hello",
            JP: "Konichiwa",
        }
        console.log(greeting[code]);
    }
    return(
        <>
            <CountrySelector handleSelectCountry={handleSelectCountry}/>
        </>
    )
}

export default Select;