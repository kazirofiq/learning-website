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
import ImportentLink from "../../Pages/Modal/ImportentLink/ImportentLink";
import UpcomingCourse from "../../Pages/Home/Course/UpcomingCourse/UpcomingCourse";
import UpcomingPremimumCourses from "../../Pages/Courses/UpcomingPremimumCourses/UpcomingPremimumCourses";
import FreeCorses from "../../Pages/Courses/FreeCorses/FreeCorses";
import Quiz from "../../Pages/Quiz/Quiz";
import Consultetion from "../../Pages/Consultetion/Consultation";
import Resource from "../../Pages/Resource/Resource";


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
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/importent',
                element: <ImportentLink />
            },
            {
                path: '/upcomingcourse',
                element: <UpcomingCourse />
            },
            {
                path: '/upcomingpremimumcourse',
                element: <UpcomingPremimumCourses />
            },
            {
                path: '/freecorses',
                element: <FreeCorses />
            },
            {
                path: '/consultetion',
                element: <Consultetion />
            },
            {
                path: '/resource',
                element: <Resource />
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