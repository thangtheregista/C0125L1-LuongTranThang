import React from "react";

const Homework18Child = ({id, handleChange}) => {
    return(
        <>
            <input type="radio" id={id} name="fav_language" value={id} onChange={(e) => {handleChange(e.target.value)}}/>
            <label htmlFor={id}>{id}</label><br/>
        </>
    )
}

export default Homework18Child;