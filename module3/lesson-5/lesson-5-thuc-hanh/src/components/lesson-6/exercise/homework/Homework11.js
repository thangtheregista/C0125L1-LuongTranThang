import React from "react";
import Homework11Child from "./Homework11Child";

const Homework11 = () => {
    const handleChange = (text) => {
        console.log(text);
    }
    return(
        <div>
            <Homework11Child handleChange={handleChange}/>
        </div>
    )
}
export default Homework11;