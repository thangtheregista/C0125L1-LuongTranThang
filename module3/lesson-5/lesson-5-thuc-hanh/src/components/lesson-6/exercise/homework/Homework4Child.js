import React from "react";

const Homework4Child = (props) => {
    const handleClick = () => {
        alert(`Hello ${props.name}`);
    }
    return(
        <>
            <button onClick={handleClick}>
                {props.name}
            </button>
        </>
    )
}
export default Homework4Child;