import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-black flex flex-col items-center py-8">

            <div className="my-8 w-16 h-16 flex justify-center items-center">
                <img src="/assets/images/wehub_logo.jpg" alt="" className='rounded-full' />
            </div>


            <ul className="w-full text-center font-lato">
                <li className="w-full">
                    <NavLink end to="/dashboard" className="block py-4 px-6 text-gray-300 hover:bg-primary hover:text-black">Dashboard</NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="generateinvoice" className="block py-4 px-6 text-gray-300 hover:bg-primary hover:text-black">Generate Invoice</NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="myinvoice" className="block py-4 px-6 text-gray-300 hover:bg-primary hover:text-black">My Invoice</NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="setting" className="block py-4 px-6 text-gray-300 hover:bg-primary hover:text-black">Settings</NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="logout" className="block py-4 px-6 text-gray-300 hover:bg-primary hover:text-black">Log Out</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar