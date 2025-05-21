import React from "react";

const DemoOnKeyUpAndOnKeyDown = () => {
    const handleKeyUp = (e) => {
        e.preventDefault()
        console.log(e.key);
    }
    const handleKeyDown = (e) => {
        e.preventDefault()
        console.log(e.key);
    }
    return(
        <>
            <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}/>
        </>
    )
}
export default DemoOnKeyUpAndOnKeyDown