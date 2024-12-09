import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import InputField from '../components/Authentication/InputField';
import { motion } from 'framer-motion';
import { account } from '../appwrite/appwrite.config';
import validator from 'validator';
import Button from '../components/basic/Button';
import { toast, ToastContainer } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa6';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Check if a user session exists
    const hasSession = async () => {
        try {
            await account.get();
            return true;
        } catch {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Input Validation
        if (!validator.isEmail(email)) {
            setError('Please provide a valid email.');
            setLoading(false);
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            setLoading(false);
            return;
        }

        try {
            // Ensure session handling
            if (await hasSession()) {
                console.log("Existing session detected. Logging out...");
                await account.deleteSessions();
            }

            console.log("Creating a new session...");
            await account.createEmailPasswordSession(email, password);

            toast.success('Login successful!');
            navigate('/dashboard');
        } catch (err) {
            console.error("Login error:", err);
            toast.error(err.message || 'An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen flex flex-row bg-black">
            <ToastContainer position="top-right" />
            {/* Left Section */}
            <div className="w-full relative md:flex hidden">
                <span className="flex items-center justify-center h-full w-full">
                    <motion.img
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: 'spring' }}
                        src="/assets/svg/login.svg"
                        className="w-1/2 h-3/4"
                        alt="Login Illustration"
                    />
                </span>
                <div className="absolute bottom-5 left-5 font-lato text-white">
                    <TypeAnimation
                        sequence={[
                            "'Accounting is the language of business.'", 1500,
                            "'Someone's sitting in the shade today because someone planted a tree a long time ago.'", 1500,
                            "'Rule No.1: Never lose money. Rule No.2: Never forget Rule No.1.'", 1500,
                            "'Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.'", 1500,
                            "'The best investment you can make is in your own abilities.'", 1500,
                        ]}
                        speed={20}
                        repeat={Infinity}
                        className="italic text-lg"
                    />
                    <br />
                    <Link to="http://www.berkshirehathaway.com/" className="text-lg italic text-primary">
                        - Warren Buffett
                    </Link>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full bg-black p-5 relative flex items-center">
                <Link to="/signup" className="absolute top-5 right-5 text-primary font-lato">
                    Sign Up
                </Link>

                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', delay: 1 }}
                    className="flex flex-col text-white w-full max-w-md mx-auto"
                >
                    <h1 className="font-extrabold font-lato text-2xl">Log into your account</h1>
                    <h3 className="text-grey text-sm mt-2">
                        Welcome back, let's go write some invoices and accept easy payments
                    </h3>

                    <form className="mt-5" onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            placeholder="Email123@gmail.com"
                            label="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            dark={true}
                        />

                        <InputField
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            dark={true}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="text-primary mt-2 text-sm"
                        >
                            {showPassword ? 'Hide Password' : 'Show Password'}
                        </button>

                        <Link to="/forgotpassword" className="text-primary mt-5 font-lato text-sm">
                            Forgot Password?
                        </Link>

                        <Button
                            className="bg-white text-black w-full rounded-lg text-center font-lato p-3 font-extrabold mt-5 flex justify-center"
                            defaultText={loading ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <FaSpinner />
                                </motion.div>
                            ) : 'Log In'}
                            disabled={loading}
                        />
                    </form>

                    {error && (
                        <motion.div
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 500, opacity: 0 }}
                            transition={{ duration: 1, type: 'spring' }}
                            className="text-red-500 font-lato p-3 text-sm mt-3"
                        >
                            {error}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
