import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const linkStyle = "block py-4 px-6 text-sm text-white hover:bg-primary hover:text-black"
    return (
        <div className="w-64 min-h-screen bg-black flex flex-col items-center py-8 relative">

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
    )
}

export default Sidebar