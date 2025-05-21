import React from "react";

const Homework6Child = ({handleClick, gender}) => {
    return(
        <>
            <button onClick={() => handleClick(gender)}>{gender}</button>

        </>
    )
}
export default Homework6Child;