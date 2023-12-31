import { useContext } from "react";
import useIsAdmin from "../../hooks/useIsAdmin";
import { AuthContext } from "../../contexts/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isLoading] = useIsAdmin(user?.uid);
    // console.log(isAdmin, loading, isLoading, user?.uid);

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

    // logOut().then(() => console.log("Logged Out")).catch(err => console.error(err))

    return <div></div>;
    // return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
