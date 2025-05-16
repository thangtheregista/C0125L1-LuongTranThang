import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

import "./FormRegister.css"

function FormRegister() {
    return(
        <>
            <form action="" className="registration-form-static">
                <h1>
                    Form Register
                </h1>
                <InputField label="Name" type="text" id="name"/>
                <InputField label="Email" type="email" id="email"/>
                <InputField label="Password" type="password" id="password"/>
                <SubmitButton text="Register"/>
            </form>
        </>
    )
}

export default FormRegister