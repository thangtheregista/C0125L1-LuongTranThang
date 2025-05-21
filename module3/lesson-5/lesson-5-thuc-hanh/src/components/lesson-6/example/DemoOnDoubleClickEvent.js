import React from "react";

const DemoOnDoubleClickEvent = () => {
    const handleDoubleClick = (e) => {
        e.preventDefault()
        console.log("Button double clicked")
    }
    return(
        <>
            <button onDoubleClick={handleDoubleClick}>
                Click me
            </button>
        </>
    )
}
export default DemoOnDoubleClickEvent