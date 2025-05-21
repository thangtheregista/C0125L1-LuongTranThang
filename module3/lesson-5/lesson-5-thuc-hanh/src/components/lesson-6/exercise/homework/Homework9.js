import React from "react";
import Homework9Child from "./Homework9Child";

const Homework9 = () => {
    const handleClick = (number) => {
        alert(number);
    }
    return(
        <div>
            <Homework9Child number={1} handleClick={handleClick}/>
            <Homework9Child number={2} handleClick={handleClick}/>
            <Homework9Child number={3} handleClick={handleClick}/>
        </div>
    )
}
export default Homework9;