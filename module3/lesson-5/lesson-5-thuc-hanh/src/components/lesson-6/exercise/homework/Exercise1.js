import React from "react";
import Exercise1Hello from "./Exercise1Hello";

const Exercise1 = () => {
    const handleClick = () => {
        console.log('Hello, React!');
    }
    return(
        <>
            <Exercise1Hello handleClick={handleClick}/>
        </>
    )
}
export default Exercise1;