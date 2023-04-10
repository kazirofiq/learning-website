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
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import AdmindashboardLayout from "../../Pages/AdminDashboard/AdmindashboardLayout/AdmindashboardLayout";
import MyCourse from "../../Pages/AdminDashboard/MyCourse/MyCourse";
import CourseList from "../../Pages/AdminDashboard/CourseList/CourseList";
import DraftCourse from "../../Pages/AdminDashboard/DraftCourse/DraftCourse";



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
        ]
    },
    {
        path: '/dashboard',
        element: <MyCourseLayout></MyCourseLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/assignment',
                element: <Assignment></Assignment>
            },
            {
                path: '/dashboard/myclass',
                element: <MyClasses></MyClasses>
            },
        ]
    },
    {
        path: '/admindashboard',
        element: <AdmindashboardLayout></AdmindashboardLayout>,
        children: [
            {
                path: '/admindashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            // {
            //     path: '/admindashboard/mycourse',
            //     element: <MyCourse></MyCourse>
            // },
            
            {
                path: "/admindashboard/mycourse",
                element: <MyCourse></MyCourse>,
                children: [
                  {
                    path: "/admindashboard/mycourse",
                    element: <CourseList></CourseList>
                  },
                  {
                    path: "/admindashboard/mycourse/draftcourse",
                    element: <DraftCourse></DraftCourse>
                  },
                  
                ]
              },
            
           
        ]
    },
])

export default router;