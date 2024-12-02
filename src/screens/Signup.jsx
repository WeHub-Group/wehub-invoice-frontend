import { Link, useNavigate } from "react-router-dom"
import InputField from "../components/Authentication/InputField"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import validator from 'validator';
import { account, ID } from "../appwrite/appwrite.config";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import Button from "../components/basic/Button";

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    Button.changeStatus(false)


    async function handleSubmit(e) {
        e.preventDefault();

        // verify input
        if (validator.isEmpty(email)) {
            setError('Email cannot be blank')
        }
        if (validator.isEmpty(telephone)) {
            setError('Telephone cannot be empty')
        }
        if (validator.isEmpty(password)) {
            setError('Password cannot be blank')
        }
        if (!validator.isEmail(email)) {
            setError('Email must be a valid email')
        }
        if (!validator.isMobilePhone(telephone)) {
            setError('Phone number is not a valid phone Number')
        }
        if (password.length < 8) {
            setError('Password cannot be less than 8 characters')
        }
        else {
            Button.changeStatus(true)
            setError("")
            await account.create(ID.unique(), email, password)
                .then((result) => {
                    account.createEmailPasswordSession(email, password)
                        .then((result) => {
                            navigate('accountsetup', { state: { $id: result.$id, telephone: telephone } })
                        }).catch((err) => {
                            console.log(err);

                        });
                }).catch((err) => {
                    toast.error("Error")
                    console.log(err);
                    Button.changeStatus(false)
                });
        }
    }

    return (
        <div className="w-screen h-screen flex flex-row bg-black">
            <ToastContainer position='top-right' />

            <div className="w-full relative md:flex hidden">
                <span className="flex items-center justify-center h-full w-full">
                    <motion.img
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: 'spring' }}
                        src="/assets/svg/signup.svg" className="w-1/2 h-3/4" alt="" />
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


            <div className="w-full bg-black p-5 relative flex justify-center items-center">
                <Link to={'/login'} className="absolute top-5 right-5 text-primary font-lato">Login</Link>


                <motion.div initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', delay: 1 }}
                    className="flex flex-col text-white">
                    <h1 className="font-extrabold font-lato text-2xl">Create an Account</h1>
                    <h3 className="text-grey text-sm">You are one step towards making swift payments and generating invoice instantly</h3>

                    <form className="mt-5">
                        <InputField type={'email'} placeholder={'Email123@gmail.com'} label={'Email'} required value={email} onChange={(e) => setEmail(e.target.value)} dark={true} />

                        <InputField type={'telephone'} placeholder={'+234 123456789'} label={'Phone Number'} value={telephone} onChange={(e) => setTelephone(e.target.value)} required dark={true} />

                        <InputField type={'password'} placeholder={'Password'} label={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} required dark={true} minLength={8} />

                        <p className="text-sm mt-5">By creating an account you argree to all our <Link to={'#'} className="text-primary">Terms and Conditions</Link></p>

                        <Button type='submit' id={'myButton'} onClick={handleSubmit} defaultText={'SignUp'} className='bg-white text-black w-full rounded-lg font-lato p-3 font-extrabold mt-5 flex justify-center text-center' />

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
        </div>
    )
}

export default Signup
