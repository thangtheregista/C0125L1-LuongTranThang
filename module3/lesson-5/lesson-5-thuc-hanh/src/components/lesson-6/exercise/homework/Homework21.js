import React from "react";
import Homework21Child from "./Homework21Child";

const Homework21 = () => {
    const info = {
        email: '',
        password: ''
    }
    const handleChange = (name, value) => {
        info[name] = value;
        console.log(info);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(info);
    }
    return(
        <div>
            <Homework21Child handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}
export default Homework21