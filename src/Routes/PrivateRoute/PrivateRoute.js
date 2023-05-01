import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    const location = useLocation();

    if (loading) {
        return <ClipLoader />
    }
    if (user?.uid && user?.emailVerified) {
        return children;
    }
    if (user?.uid && !user?.emailVerified) {
        return <Navigate to="/verify-email" state={{ from: location }} replace />
    }

   
    if (!user?.emailVerified) {
        return <Navigate to="/verify-email" state={{ from: location }} replace />
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
