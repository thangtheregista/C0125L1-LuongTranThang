import React from "react";
import "./Alert.css"
function Alert(props) {

    return(
        <div>
            <p className={props.success}>
                {props.success}
            </p>
            <p className={props.warning}>
                {props.warning}
            </p>
            <p className={props.error}>
                {props.error}
            </p>
        </div>
    )
}
export default Alert