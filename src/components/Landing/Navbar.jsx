import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    return (
        <div className='h-auto bg-white z-50 w-full p-3 flex flex-wrap items-center justify-between sticky top-0'>

            <motion.NavLink reloadDocument 
            animate={{x:0,opacity:1}} 
            initial={{x:-500,opacity:0}}
             className="text-black text-2xl md:text-3xl font-lato">
                WE- <span className="text-darkPrimary">HUB</span>
            </motion.NavLink>



            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>
            <div className="hidden md:flex">
                <NavButtons />
            </div>

            <div className="md:hidden p-2 transition-all cursor-pointer text-primary" onClick={toggleNav}>
                {isOpen ? <FaX size={24} color="currentcolor" /> : <AiOutlineMenu size={24} color="currentcolor" />}
            </div>

            {/* When mobile isOpen it should display this */}
            {isOpen &&
                <>
                    <div className="text-primary basis-full md:hidden">
                        <NavLinks />
                        <NavButtons />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] hover:text-primary font-poppins text-[16px] cursor-pointer transition-all"
    return (
        <div className='text-2xl font- text-black flex flex-col justify-center md:flex-row gap-4 items-center'>
            <NavLink className={navbarStyling} to="#hero">Home</NavLink>
            <NavLink className={navbarStyling} to="/#pricing">Pricing</NavLink>
            <NavLink className={navbarStyling} to="/#contactus">Contact Us</NavLink>
            <NavLink className={navbarStyling} to="/#features">Features</NavLink>
        </div>
    )
}


function NavButtons() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-5">
            <Link to={"/login"} className="p-[10px_20px] text-sm rounded-lg text-darkPrimary font-poppins cursor-pointer">Login</Link>
            <Link to={"/signup"} className="cursor-pointer text-sm font-poppins text-white p-[10px_20px] rounded-lg bg-darkPrimary">Sign Up</Link>
        </div>
    )
}

export default Navbar
