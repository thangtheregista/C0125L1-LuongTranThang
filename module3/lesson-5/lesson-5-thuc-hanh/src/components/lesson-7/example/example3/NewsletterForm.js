import React, {useState} from "react";
import EmailInput from "./EmailInput";

const NewsletterForm = () => {
    let [email, setEmail] = useState("");
    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        alert(`Email: ${email}`);
    }
    return(
        <>
            <h3>
                Dang ky nhan tin
            </h3>
            <EmailInput onChangeEmail={handleEmailChange} email={email}/>
            <button onClick={handleSubmitForm}>Gui</button>
        </>
    )
}
export default NewsletterForm