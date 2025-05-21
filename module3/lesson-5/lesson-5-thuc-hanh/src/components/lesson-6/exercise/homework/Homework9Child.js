import React from "react";

const Homework9Child = ({handleClick, number}) => {
    return(
        <>
            <button onClick={() => handleClick(number)}>{number}</button>
        </>
    )
}
export default Homework9Child;