import React from "react";
import Homework13Child from "./Homework13Child";
const Homework13 = () => {
    const information = {
        name: "",
        age: "",
        email: ""
    }
    const handleChange = (name, text) => {
        information[name] = text;
        console.log(information);
    }
    return(
        <div>
            <Homework13Child handleChange={handleChange}/>
        </div>
    )
}
export default Homework13