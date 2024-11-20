import MobileNavbar from '../components/Dashboard/MobileNavBar'
import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const UserDasboard = () => {
    return (
        <div className="flex h-screen">
            <div className="md:flex hidden">
                <Sidebar />
            </div>

            <div className="flex-1 overflow-y-scroll">
                <div className="md:hidden">
                    <MobileNavbar />
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default UserDasboard