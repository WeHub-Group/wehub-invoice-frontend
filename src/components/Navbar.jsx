import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='h-auto bg-white z-50 w-full p-4 flex flex-wrap items-center justify-between sticky top-0'>

            <NavLink reloadDocument className="text-black text-2xl md:text-3xl font-lato">
                WE- <span className="text-darkPrimary">HUB</span>
            </NavLink>


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
            <a className={navbarStyling} href="/#hero">Home</a>
            <a className={navbarStyling} href="/#pricing">Pricing</a>
            <a className={navbarStyling} href="/#contactus">Contact Us</a>
            <a className={navbarStyling} href="/#features">Features</a>
        </div>
    )
}

function NavButtons() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="md:border p-[10px_20px] rounded-lg border-darkPrimary text-darkPrimary font-poppins cursor-pointer">Login</div>
            <div className="cursor-pointer font-poppins text-white p-[10px_20px] rounded-lg bg-darkPrimary">Sign Up</div>
        </div>
    )
}

export default Navbar
