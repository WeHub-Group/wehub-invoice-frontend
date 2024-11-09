import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const UserDasboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            {/* <Sidebar /> */}

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    )
}

export default UserDasboard