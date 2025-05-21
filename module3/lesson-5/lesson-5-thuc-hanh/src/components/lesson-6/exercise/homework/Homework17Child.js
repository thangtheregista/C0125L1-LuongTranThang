import React from "react";

const Homework17Child = ({handleChange, id, value}) =>{
    return(
        <>
            <input type="checkbox" id={id} name={id} value={value} onChange={(e) => {
                handleChange(e.target.checked, value)
            }}/>
            <label htmlFor={id}> {value}</label><br/>
        </>
    )
}
export default Homework17Child