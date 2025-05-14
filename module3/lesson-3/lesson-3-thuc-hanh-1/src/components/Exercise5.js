import React from "react";

function Exercise5() {
    const names = ["Alice", "Bob", "Charlie"]
    return(
        <ul>
            {
                names.map((name,index)=> (
                    <li key={index}>
                        {name}
                    </li>
                ))
            }
        </ul>
    )
}
export default Exercise5