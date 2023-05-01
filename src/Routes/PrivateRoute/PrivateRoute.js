import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <ClipLoader color="#0000ff" size="50" />
            </div>
        );
    }

    if (user?.uid && !user?.emailVerified) {
        return <Navigate to="/verify-email" state={{ from: location }} replace />
    }

    if (user?.uid && user?.emailVerified) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
