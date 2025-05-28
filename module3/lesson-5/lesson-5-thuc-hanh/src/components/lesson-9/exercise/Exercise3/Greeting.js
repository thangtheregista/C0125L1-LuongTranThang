import React from "react";

const Greeting = ({greeting}) => {
    return (
        <div>
            {
                greeting && <h2>{greeting}</h2>
            }
        </div>
    );
}
export default Greeting;