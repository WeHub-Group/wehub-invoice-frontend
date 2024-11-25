import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
    const User = localStorage.getItem('cookieFallback')
    console.log(!!User);


    return User ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
