import React from "react";

function Exercise18() {
    function number(num) {
        return (
            <p>
                So la: {num}
            </p>
        )
    }
    const num1 = number(1);
    const num2 = number(2);
    return(
        <>
            {num1}
            {num2}
        </>
    )
}
export default Exercise18;