import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PremiumCourseHome from "../../Pages/Home/PremiumCourse/PremiumCourseHome/PremiumCourseHome";
import OrderDetails from "../../Pages/OrderDetails/OrderDetails";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: '/premium_course',
                element: <PremiumCourseHome></PremiumCourseHome>
            },
            {
                path: '/payment',
                element: <OrderDetails />
            },
            {
                path:'/profile',
                element:<ProfilePage />
            }
        ]
    }
])

export default router;