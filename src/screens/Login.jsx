import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import InputField from '../components/Authentication/InputField';
import { motion } from 'framer-motion';
import { account } from '../appwrite/appwrite.config';
import validator from 'validator';
import Button from '../components/basic/Button';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    Button.changeStatus(false);

    async function handleSubmit(e) {
        e.preventDefault();

        // Verify Input
        if (validator.isEmpty(email)) {
            setError('Email cannot be blank')
        }
        if (validator.isEmpty(password)) {
            setError('Password cannot be blank')
        }
        if (!validator.isEmail(email)) {
            setError('Email must be a valid email')
        }
        if (password.length < 8) {
            setError('Password cannot be less than 8 characters')
        }
        else {
            Button.changeStatus(true)

            await account.deleteSessions();

            await account.createEmailPasswordSession(email, password)
                .then((result) => {
                    navigate('/dashboard')
                }).catch((err) => {
                    Button.changeStatus(false)
                    toast.error('User Account not found: try again')
                    console.log(err);
                });
        }
    }


    return (
        < div className="w-screen h-screen flex flex-row bg-black" >
            <ToastContainer position='top-right' />
            <div className="w-full relative md:flex hidden">
                <span className="flex items-center justify-center h-full w-full">
                    <motion.img
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: 'spring' }}
                        src="/assets/svg/login.svg" className="w-1/2 h-3/4" alt="" />
                </span>
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

                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', delay: 1 }}
                    className="flex flex-col text-white">
                    <h1 className="font-extrabold font-lato text-2xl">Log into your account</h1>
                    <h3 className="text-grey text-sm">Welcome back, let's go write some invoices and accept easy payments</h3>

                    <form className="mt-5">
                        <InputField type={'text'} placeholder={'Email123@gmail.com'} label={'Email'} required value={email} onChange={(e) => setEmail(e.target.value)} dark={true} />

                        <InputField type={'password'} placeholder={'Password'} label={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} dark={true} />

                        <Link to={'forgotpassword'} className="text-primary mt-5 font-lato text-sm">Forgot Password?</Link>

                        <Button className="bg-white text-black w-full rounded-lg text-center font-lato p-3 font-extrabold mt-5 flex justify-center" defaultText={'Log In'} onClick={handleSubmit} />
                        {error &&
                            <motion.div
                                initial={{ x: 500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 500, opacity: 0 }}
                                transition={{ duration: 1, type: 'spring' }}
                                className=" text-red-500 font-lato p-3 text-sm mt-3">
                                {error}
                            </motion.div>
                        }
                    </form>

                </motion.div>
            </div>
        </div >
    )
}

export default Login
