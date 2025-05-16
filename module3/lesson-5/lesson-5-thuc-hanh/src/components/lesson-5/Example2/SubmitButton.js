import React from "react";
import "./SubmitButton.css"

function SubmitButton(props) {
    return(
        <>
            <button className="submit-button-static" disabled>
                {props.text}
            </button>
        </>
    )
}

export default SubmitButton