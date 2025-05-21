import React from "react";

const DemoMouseOverAndMouseOut = () => {
    const handleMouseOver = () => {
        console.log('Mouse Over');
    }
    const handleMouseOut = () => {
        console.log('Mouse Out');
    }
    return(
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
             Button
        </div>
    )
}

export default DemoMouseOverAndMouseOut