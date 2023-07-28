import { useState } from 'react';
import '../styles/login.scss'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function formSubmit() {
        navigate("/dashboard")
    }
    return (
        <div className="login">
            <div className="center">
                <div className="header">Get Started!</div>
                <div className="center_label">Log Into your account</div>

                <form onSubmit={formSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Email123@gmail.com' minLength={2} maxLength={255} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' minLength={2} maxLength={255} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <span>Forgot Password?</span>
                    <input type="submit" value="Proceed" />

                    <p>Don&apos;t have an account? <span>Sign Up</span></p>
                </form>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default Login
