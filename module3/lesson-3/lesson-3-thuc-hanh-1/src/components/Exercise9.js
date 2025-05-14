import React from "react"

function Exercise9() {
    function displayString(str) {
        return (
            <div>
                {str}
            </div>
        )
    }
    const str1 = displayString("Hello World");
    const str2 = displayString("Hello React");
    return(
        <>
            <div>
                {str1}
            </div>
            <div>
                {str2}
            </div>
        </>
    )
}
export default Exercise9