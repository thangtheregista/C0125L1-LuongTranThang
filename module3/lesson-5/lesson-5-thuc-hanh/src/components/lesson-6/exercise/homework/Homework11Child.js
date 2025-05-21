import React from "react";

const Homework11Child = ({handleChange}) => {
    return(
        <>
            <input type="text" onChange={(e) => handleChange(e.target.value)} placeholder="Type anything"/>
        </>
    )
}
export default Homework11Child;