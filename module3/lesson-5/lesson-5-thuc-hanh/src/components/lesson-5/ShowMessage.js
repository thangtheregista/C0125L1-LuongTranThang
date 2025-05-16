import React from "react";

function ShowMessage(props) {

    return(
        <>
            <h1>{props.menuInfo.title}</h1>
            <p>{props.menuInfo.description}</p>
            <p>{props.menuInfo.price}</p>
            <ul>
                {props.menuItem.map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </>
    )
}

export default ShowMessage