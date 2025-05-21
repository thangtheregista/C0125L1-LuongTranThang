import React from "react";
import Homework22Child from "./Homework22Child";

const Homework22 = () => {
    const numbers= new Array(2);

    const handleChange = (index, value) => {
        numbers[index] = +value;
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum+=numbers[i];
        }
        console.log(sum)
    }

    return(
        <div>
            <Homework22Child handleChange={handleChange} index="0"/>
            <Homework22Child handleChange={handleChange} index="1"/>
        </div>
    )
}
export default Homework22