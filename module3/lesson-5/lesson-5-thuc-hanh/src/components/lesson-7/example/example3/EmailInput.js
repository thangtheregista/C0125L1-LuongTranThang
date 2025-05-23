import React from "react";

const EmailInput = ({ email, onChangeEmail }) => {

    return (
        <div>
            <input type="email" value={email} placeholder="Nhap email cua ban" onChange={(e)=> {
                onChangeEmail(e.target.value)
            }}/>
        </div>
    );
}
export default EmailInput;