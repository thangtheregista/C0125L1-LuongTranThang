import React, {useState} from "react";

function Login() {
    const [users, setUsers] = useState([
        {
            email: "nguyenvana@gmail.com", password: "123456"
        },
        {
            email: "nguyenvanb@gmail.com", password: "123456"
        }
    ])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleEmailChange = (email) => {
        setEmail(email)
    }
    const handlePasswordChange = (password) => {
        setPassword(password);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(email));
        const user = users.find(user => user.email === email && user.password === password);
        if (!isValidEmail) {
            alert("Email is invalid");
            return;
        } else if (user) {
            alert("Login successful");
            setEmail("");
            setPassword("");
        } else {
            alert("Login failed");
            setEmail("");
            setPassword("");
        }

    }
    return (
        <>
            <h2>Login status</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e)=> {handleEmailChange(e.target.value)}} value={email}/>
                <input type="password" placeholder="Password" onChange={(e)=> handlePasswordChange(e.target.value)} value={password}/>
                <button type="submit">Login</button>
            </form>
            {!isValidEmail && <p style={{color: "red"}}>Email is invalid</p>}
        </>
    )
}

export default Login