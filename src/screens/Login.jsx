import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import InputField from '../components/Authentication/InputField';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function formSubmit() {
    }

    return (
        <div className="w-screen h-screen flex flex-row bg-black">
            <div className="w-full relative">
                <div className="absolute bottom-5 left-5 font-lato text-white">
                    <TypeAnimation
                        sequence={[
                            "'Accounting is the language of business.'", 1500,

                            "'Someone's sitting in the shade today because someone planted a tree a long time ago.'", 1500,

                            "'Rule No.1: Never lose money. Rule No.2: Never forget Rule No.1.'", 1500,

                            "'Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.'", 1500,

                            "'The best investment you can make is in your own abilities.'", 1500
                        ]}
                        speed={20}
                        repeat={Infinity}
                        className="italic text-lg" />
                    <br />
                    <Link to={'http://www.berkshirehathaway.com/'} className="text-lg italic text-primary">- Warren Buffett</Link>
                </div>
            </div>


            <div className="w-full bg-black p-5 relative flex items-center">
                <Link to={'/signup'} className="absolute top-5 right-5 text-primary font-lato">Sign Up</Link>



                <div className="flex flex-col text-white">
                    <h1 className="font-extrabold font-lato text-2xl">Log into your account</h1>
                    <h3 className="text-grey text-sm">Welcome back, let's go write some invoices and accept easy payments</h3>

                    <form className="mt-5">
                        <InputField type={'text'} placeholder={'Email123@gmail.com'} label={'Email'} required value={email} onChange={(e) => setEmail(e.target.value)} />

                        <InputField type={'password'} placeholder={'Password'} label={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Link to={'#'} className="text-primary mt-5 font-lato text-sm">Forgot Password?</Link>

                        <button className="bg-white text-black w-full rounded-lg text-center font-lato p-3 font-extrabold mt-5">Log In</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
