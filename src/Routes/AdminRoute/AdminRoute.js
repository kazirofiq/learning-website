import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../../hooks/useIsAdmin";
import { AuthContext } from "../../contexts/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading, logout } = useContext(AuthContext);
    const [isAdmin, isLoading] = useIsAdmin(user?.uid);
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user?.uid && isAdmin) {
        return children;
    }

    logout().then(() => { }).catch(err => console.error(err))

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
