import React from "react";

const ClockDisplay=({currentTime}) => {
    return(
        <div>
            <h1>Current Time</h1>
            <p>{currentTime}</p>
        </div>
    )
}
export default ClockDisplay;