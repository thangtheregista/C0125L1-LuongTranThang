import React from "react";

function Exercise3() {
    function elementJSX() {
        return (
            <div>
                <p>
                    Chào mừng đến với ReactJS
                </p>
            </div>
        )
    }
    const element1 = elementJSX()
    return(
        <>
            {elementJSX()}
            {element1}
        </>
    )
}
export default Exercise3