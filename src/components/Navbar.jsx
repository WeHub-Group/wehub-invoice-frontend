import './Navbar.scss'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div className="navbar">
            <a href="/" className="navbar_logo">LOGO IMAGE</a>
            <div className="navbar_links">
                <a href="/" className=''>Home</a>
                <a href="/#advert" className=''>Pricing</a>
                <a href="/#footer" className=''>Contact Us</a>
                <a href="/#features" className=''>Features</a>
            </div>
            <div className="navbar_buttons">
                <Link to="/login" className="navbar_buttons_login">Login</Link>
                <Link to="/signup" className="navbar_buttons_signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default navbar
