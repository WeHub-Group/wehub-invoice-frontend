import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuHamburger, MenuStrawberry } from "@iconsans/react/bold";

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    return (
        <div className='h-auto bg-black z-50 w-full p-3 flex flex-wrap items-center justify-between sticky top-0'>

            <Link reloadDocument
                className="text-white text-2xl md:text-3xl font-lato cursor-pointer">
                Welcome 👋
            </Link>

            <div className="md:hidden p-2 text-2xl transition-all cursor-pointer text-primary" onClick={toggleNav}>
                {isOpen ? <MenuStrawberry /> : <MenuHamburger />}
            </div>

            {/* When mobile isOpen it should display this */}
            {isOpen &&
                <>
                    <div className="text-primary basis-full md:hidden">
                        <NavLinks />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] hover:text-primary font-poppins text-sm cursor-pointer transition-all"

    return (
        <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className='text-2xl font-lato mt-2 text-white flex flex-col justify-center md:flex-row gap-4 items-center'>
            <NavLink to="/dashboard" className={navbarStyling}>Dashboard</NavLink>
            <NavLink to="generateinvoice" className={navbarStyling}>Generate Invoice</NavLink>
            <NavLink to="myinvoice" className={navbarStyling}>My Invoice</NavLink>
            <NavLink to="setting" className={navbarStyling}>Settings</NavLink>
            <NavLink to="logout" className={navbarStyling}>Log Out</NavLink>
        </motion.div>
    )
}


export default MobileNavbar
