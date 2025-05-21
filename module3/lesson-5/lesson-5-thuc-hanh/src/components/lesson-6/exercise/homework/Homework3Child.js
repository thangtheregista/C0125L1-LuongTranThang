import React from "react";

const Homework3Child = (props) => {
    const handleClick = () => {
        props.onNotify("Clicked");
    }
    return(
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}

export default Homework3Child;