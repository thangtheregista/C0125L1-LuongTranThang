import React from "react";

const DemoOnClickEvent = () => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log("Button clicked")
    }
    return(
        <>
            <button onClick={handleClick}>
                Click me
            </button>
        </>
    )
}
export default DemoOnClickEvent