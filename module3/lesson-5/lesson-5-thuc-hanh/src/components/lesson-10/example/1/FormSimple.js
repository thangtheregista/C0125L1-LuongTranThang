import React from "react";

const FormSimple = () => {
    const [formData, setFormData] = React.useState({
            username: '',
            password: ''
        }
    );
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev)=> (
            {...prev, [name]: value}
        ))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Type username..." value={formData.username} onChange={(e)=> handleChange(e)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Type username..." value={formData.password} onChange={(e)=> handleChange(e)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormSimple