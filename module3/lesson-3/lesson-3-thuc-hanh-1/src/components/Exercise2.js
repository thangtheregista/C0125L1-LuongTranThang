import React from "react";

function Exercise2() {
    const user = {
        name: "Thang",
    }
    const user1 = (
        <h1>
            Xin chao {user.name}
        </h1>
    )
    return(
        <>
            {user1}
        </>
    )
}
export default Exercise2