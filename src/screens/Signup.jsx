import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../styles/signup.scss'

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function formSubmit() {
        navigate("/accountSetup")
    }

    return (
        <div className="signup">
            <div className="center">
                <div className="header">Get Started!</div>
                <div className="center_label">You are one step ahead towards recieving due payments and generating invoices instantly.</div>

                <form onSubmit={formSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Email123@gmail.com' minLength={2} maxLength={255} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='+234 123456789' value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    <p>By creating an account you agree to all our <br /> <span>Terms and Condition</span></p>
                    <input type="submit" value="Proceed" />
                </form>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default Signup
