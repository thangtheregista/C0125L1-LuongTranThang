import React from "react";

const Homework22Child = ({handleChange, index}) => {
    return(
        <>
            <input type="number" onChange={(e) => {
                handleChange(index, e.target.value)
            }}/>
        </>
    )
}
export default Homework22Child