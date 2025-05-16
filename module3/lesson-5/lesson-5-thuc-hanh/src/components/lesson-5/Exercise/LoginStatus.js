import React from "react";

function LoginStatus(props) {

    return(
        <div>
            {props.isLoggedIn ? "Da dang nhap" : "Chua dang nhap"}
        </div>
    )
}
export default LoginStatus