import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../../hooks/useIsAdmin";
import { AuthContext } from "../../contexts/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, isLoading] = useIsAdmin(user?.uid);
    const location = useLocation();

    if (loading || isLoading) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <progress className="progress w-56"></progress>
            </div>
        );
    }

    if (user?.uid && isAdmin) {
        return children;
    }

    logOut().then(() => console.log("Logged Out")).catch(err => console.error(err))

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
