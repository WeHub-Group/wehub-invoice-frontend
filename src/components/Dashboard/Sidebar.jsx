import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const linkStyle = "block py-4 px-6 text-sm text-white hover:bg-primary hover:text-black"

    useEffect(() => {
        setIsOpen(false)
    }, [location])


    return (
        <div>
            {/* Toggle Button */}
            <button
                className={`p-4 text-black bg-primary rounded-md fixed top-3 left-3 z-50 ${isOpen ? 'border-white border' : ''}`}
                onClick={toggleSidebar}
            >

                {isOpen ?
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FiX />
                    </motion.div>
                    :
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FiMenu />
                    </motion.div>}
            </button>


            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-white text-black transform ${isOpen ? "translate-x-0 z-[51]" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out w-64 shadow-lg`}
            >
                <div className={`w-64 min-h-screen bg-black flex flex-col items-center py-8`}>

                    <div className="my-8 w-16 h-16 flex flex-row gap-3 justify-center items-center">
                        <img src="/assets/images/wehub_logo.jpg" alt="" className='rounded-full' />
                        <p className='uppercase text-sm text-white'>Wehub <span className='text-primary'>Invoice</span> Generator</p>
                    </div>

                    <div className="h-0.5 w-full bg-primary"></div>

                    <ul className="w-full text-center font-lato mt-10">
                        <li className="w-full">
                            <NavLink end to="/dashboard" className={linkStyle}>Dashboard</NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="generateinvoice" className={linkStyle}>Generate Invoice</NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="setting" className={linkStyle}>Settings</NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="logout" className={linkStyle}>Log Out</NavLink>
                        </li>
                    </ul>

                </div>

            </div>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
