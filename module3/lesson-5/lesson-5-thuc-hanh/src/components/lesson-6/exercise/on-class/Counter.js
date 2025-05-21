import React from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
    let count = 0;
    const handleIncrease = () => {
        count++;
        console.log(count);
    }
    const handleDecrease = () => {
        count--;
        console.log(count);
    }
    return (
        <div>
            <CounterButton handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>
        </div>
    );
}
export default Counter;