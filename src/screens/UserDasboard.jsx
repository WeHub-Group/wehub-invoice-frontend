import Sidebar from '../components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const UserDasboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            {/* <Sidebar /> */}

            {/* Main Content Area */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default UserDasboard