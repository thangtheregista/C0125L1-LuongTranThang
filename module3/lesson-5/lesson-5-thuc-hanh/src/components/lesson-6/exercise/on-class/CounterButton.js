import React from "react";

const CounterButton = ({ handleDecrease, handleIncrease }) => {
    return (
        <div>
            <button onClick={handleIncrease}>
                +
            </button>
            <button onClick={handleDecrease}>
                -
            </button>
        </div>
    );
}
export default CounterButton;