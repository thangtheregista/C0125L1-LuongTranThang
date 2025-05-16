import React from "react";
import "./Navbar.css"
function Navbar(props) {

    return(
        <div className="navbar">
            <ul>
                {props.links.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Navbar