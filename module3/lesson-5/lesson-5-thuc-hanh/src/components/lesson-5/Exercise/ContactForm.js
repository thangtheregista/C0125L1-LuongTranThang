import React from "react";
import InputField from "../Example2/InputField";
import SubmitButton from "../Example2/SubmitButton";

function ContactForm(props) {

    return(
        <div>
            <InputField label="Name" type="text" id="name"/>
            <InputField label="Email" type="email" id="email"/>
            <InputField label="Text" type="text" id="text"/>
            <SubmitButton text="Contact"/>
        </div>
    )
}
export default ContactForm