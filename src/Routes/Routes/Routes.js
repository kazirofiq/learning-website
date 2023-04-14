import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PremiumCourseHome from "../../Pages/Home/PremiumCourse/PremiumCourseHome/PremiumCourseHome";
import OrderDetails from "../../Pages/OrderDetails/OrderDetails";
import MyCourseLayout from "../../Layout/MyCourseLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyClasses from "../../Pages/MyClasses/MyClasses";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import Assignment from "../../Pages/Assignment/Assignment";
import Quiz from "../../Pages/Quiz/Quiz";
import ImportantLink from "../../Pages/Modal/ImportantLink/ImportantLink";
import ProfileDetails from "../../Pages/ProfilePage/ProfileDetails/ProfileDetails";
import OrderHistory from "../../Pages/Order History/OrderHistory";


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
            // {
            //     path: '/profile',
            //     element: <ProfilePage />
            // },
            {
                path: '/important',
                element: <ImportantLink />
            },
            {
                path: "/profile",
                element: <ProfilePage />,
                children: [
                    {
                        path: "/profile",
                        element: <ProfileDetails></ProfileDetails>
                    },
                    {
                        path: "/profile/important",
                        element: <ImportantLink></ImportantLink>
                    },
                    {
                        path: "/profile/order_history",
                        element: <OrderHistory></OrderHistory>
                    },
                ]
            },
        ]
    },
    {
        path: '/dashboard',
        element: <MyCourseLayout></MyCourseLayout>,
        children: [
            {
                path: '/dashboard/my_course',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/assignment',
                element: <Assignment></Assignment>
            },
            {
                path: '/dashboard/quiz',
                element: <Quiz></Quiz>
            },
            {
                path: '/dashboard/myclass',
                element: <MyClasses></MyClasses>
            },
        ]
    },
])

export default router;