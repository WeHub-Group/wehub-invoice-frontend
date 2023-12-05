import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    function logout() {
        alert("You are about to be logged out. Do you agree?")
    }


    return (
        <div className="sidebar">
            <div className="sidebar_center">
                <div className="sidebar_center_logo"></div>
                <div className="sidebar_center_links">
                    <Link to="">Dashboard</Link>
                    <Link to="">Generate Invoice</Link>
                    <Link to="">My Invoices</Link>
                    <Link to="">Settings</Link>
                    <Link to="" onClick={logout}>Log out</Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
