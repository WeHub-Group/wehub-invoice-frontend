import MobileNavbar from '../components/Dashboard/MobileNavBar'
import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const UserDasboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Layout */}
            <div className="flex-1 overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    )
}

export default UserDasboard