import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../styles/signup.scss'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className="signup">

        </div>
    )
}

export default Signup
