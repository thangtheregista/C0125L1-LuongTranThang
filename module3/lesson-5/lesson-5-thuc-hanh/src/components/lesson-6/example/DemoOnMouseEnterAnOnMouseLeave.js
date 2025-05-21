import React from "react";

const DemoOnMouseEnterAnOnMouseLeave = () => {
    const handleMouseEnter = (e) => {
        console.log("Mouse entered")
    }
    const handleMouseLeave = (e) => {
        console.log("Mouse left")
    }
    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover over this text
        </div>
    )
}

export default DemoOnMouseEnterAnOnMouseLeave