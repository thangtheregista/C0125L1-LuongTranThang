import React from "react";
import "./InputField.css"
function InputField(props) {
    return(
        <div className="input-group-static">
            <label htmlFor={props.id}>
                {props.label}:
            </label>
            <input type={props.type} id={props.id} readOnly/>
        </div>
    )
}

export default InputField