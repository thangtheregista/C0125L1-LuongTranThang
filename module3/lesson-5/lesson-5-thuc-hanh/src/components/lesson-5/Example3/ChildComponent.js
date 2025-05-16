import React from "react";

function ChildComponent(props) {
    const onClick = () => {
        props.onButtonClick("Du lieu tu con");
    }
    return(
        <div>
            <button onClick={onClick}>

            </button>
        </div>
    )
}
export default ChildComponent