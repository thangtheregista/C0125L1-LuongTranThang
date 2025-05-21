import React from "react";
import Homework17Child from "./Homework17Child";

const Homework17 = () => {
    const hobbies = []
    const handleChange = (checked, hobby) => {
        if (checked) {
            hobbies.push(hobby)
        } else {
            const index = hobbies.indexOf(hobby)
            if (index > -1) {
                hobbies.splice(index, 1)
            }
        }
        console.log(hobbies)
    }
    return(
        <div>
            <Homework17Child handleChange={handleChange} id="hobby1" value="Football"/>
            <Homework17Child handleChange={handleChange} id="hobby2" value="Games"/>
            <Homework17Child handleChange={handleChange} id="hobby3" value="Movies"/>
        </div>
    )
}
export default Homework17
