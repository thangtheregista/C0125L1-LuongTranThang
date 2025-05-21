import React from "react";
import Homework5Child from "./Homework5Child";

const Homework5 = () => {
    const handleClick = (status) => {
        alert(status)
    }
    return(
        <div>
            <Homework5Child handleClick={handleClick} />
        </div>
    )
}
export default Homework5;