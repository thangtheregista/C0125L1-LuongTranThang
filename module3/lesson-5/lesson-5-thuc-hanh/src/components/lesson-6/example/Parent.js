import React from "react";
import Child from "./Child";

const Parent = () => {
    const handleClick = () => {
        alert("Button clicked!");
    }
    return(
        <>
            <h1>
                Parent Component
            </h1>
            <Child handleClick={handleClick}/>
        </>
    )
}
export default Parent