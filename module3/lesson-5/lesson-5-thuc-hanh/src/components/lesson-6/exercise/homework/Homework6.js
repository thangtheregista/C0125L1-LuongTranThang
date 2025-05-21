import React from "react";
import Homework6Child from "./Homework6Child";

const Homework6 = () => {
    const handleClick = (gender) => {
        alert(gender);
    }
    return(
        <div>
            <Homework6Child gender="Nam" handleClick={handleClick}/>
            <Homework6Child gender="Nu" handleClick={handleClick}/>
            <Homework6Child gender="Khac" handleClick={handleClick}/>
        </div>
    )
}
export default Homework6