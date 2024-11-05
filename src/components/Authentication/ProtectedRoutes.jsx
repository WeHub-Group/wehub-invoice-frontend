import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
    const User = null
    return User ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
