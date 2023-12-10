import { useContext, useEffect } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../contexts/auth.context"

const PrivateRoute = ({ acceptedRoles }) => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!loggedUser) {
        return <Navigate to="/inicio-sesion?err=notlogged" />
    }

    if (acceptedRoles && !acceptedRoles.includes(loggedUser.role)) {
        return <Navigate to="/inicio-sesion?err=unauthorized" />
    }

    return <Outlet />
}

export default PrivateRoute