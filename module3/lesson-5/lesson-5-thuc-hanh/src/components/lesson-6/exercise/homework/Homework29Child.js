import React from "react";

const Homework29Child = ({color, handleClick}) => {
    return (
        <div>
            <button onClick={(e)=>{handleClick(color)}}>{color}</button>
        </div>
    )
}
export default Homework29Child