import React from "react";
import Homework29Child from "./Homework29Child";

const Homework29 = () => {
    const handleClick = (color) => {
        document.getElementById("root").style.backgroundColor = color;
    }
    return(
        <div>
            <Homework29Child color="red" handleClick={handleClick}/>
            <Homework29Child color="blue" handleClick={handleClick}/>
        </div>
    )
}
export default Homework29;
