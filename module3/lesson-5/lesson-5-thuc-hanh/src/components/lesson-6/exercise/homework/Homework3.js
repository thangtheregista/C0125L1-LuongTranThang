import React from "react";
import Homework3Child from "./Homework3Child";

const Homework3 = () => {
    const onNotify = (message) => {
        alert(message);
    }
    return(
        <div>
            <Homework3Child onNotify={onNotify}/>
        </div>
    )
}
export default Homework3;
