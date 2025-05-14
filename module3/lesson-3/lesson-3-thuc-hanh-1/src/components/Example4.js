import React from "react";

function Example4() {
    let myStyle = {
        color: "red",
        backgroundColor: "pink",
        fontFamily:"Arial",
        fontSize: "50px",
    }
    const linkElement = (
        <a href="http://youtube.com" target="_blank" className="link">
            Link to Youtube
        </a>
    );
    const nestedElement = (
        <div className="container">
            <p style={myStyle}>
                Day la noi dung trong the p
            </p>
            <span>
                Day la noi dung trong the span
            </span>
        </div>
    )
    return(
        <>
            {nestedElement}
            {linkElement}
        </>
    );
}

export default Example4