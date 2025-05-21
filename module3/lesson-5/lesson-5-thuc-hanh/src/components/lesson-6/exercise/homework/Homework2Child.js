import React from "react";

const Homework2Child = ({name}) => {
    const handleClick = () => {
        alert(`Hello ${name}`);
    }
    return(
        <>
            <button onClick={handleClick}>
                Click me
            </button>
        </>
    )
}
export default Homework2Child;