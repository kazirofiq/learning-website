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
import Assignment from "../../Pages/Assignment/Assignment";
import Quiz from "../../Pages/Quiz/Quiz";
import FreeCorses from "../../Pages/Courses/FreeCorses/FreeCorses";
import WorkShop from "../../Pages/WorkShop/WorkShop";
import Upcoming from "../../Pages/WorkShop/Upcoming/Upcoming";
import Previous from "../../Pages/WorkShop/Previous/Previous";
import AllReviews from "../../Pages/Reviews/AllReviews/AllReviews";
import ProfileLayout from "../../Layout/ProfileLayout";
import StudentDashboard from "../../Pages/StudentDashboard/StudentDashboard/StudentDashboard";
import OrderHistory from "../../Pages/ProfilePage/OrderHistory/OrderHistory";
import CategoryFinder from "../../Pages/KdpTools/CategoryFinder/CategoryFinder";
import QrGenaretor from "../../Pages/KdpTools/QrGenaretor/QrGenaretor";
import RoyalCalculetor from "../../Pages/KdpTools/RoyaltyCalculetor/RoyalCalculetor";
import BsrCalculetor from "../../Pages/KdpTools/BsrCalculetor/BsrCalculetor";
import KdpTools from "../../Pages/KdpTools/KdpTools/KdpTools";
import KdpLayout from "../../Layout/KdpLayout";
import DraftCourse from "../../Pages/AdminDashboard/DraftCourse/DraftCourse";
import CourseList from "../../Pages/AdminDashboard/CourseList/CourseList";
import MyCourse from "../../Pages/AdminDashboard/MyCourse/MyCourse";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import AdmindashboardLayout from "../../Pages/AdminDashboard/AdmindashboardLayout/AdmindashboardLayout";
import Resource from "../../Pages/Resource/Resource";
import Consultation from "../../Pages/Consultetion/Consultation";
import ImportentLink from "../../Pages/ProfilePage/ImportentLink/ImportentLink";
import FrequentlyAskedQuestion from "../../Pages/Home/PremiumCourse/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import AddFAQ from "../../Pages/Home/PremiumCourse/AddFAQ/AddFAQ";


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
                path: '/upcomingpremimumcourse',
                element: <pUpcomingPremimumCourses />
            },
            {
                path: '/freecorses',
                element: <FreeCorses />
            },
            {
                path: '/consultetion',
                element: <Consultation />
            },
            {
                path: '/resource',
                element: <Resource />
            },
            {
                path: '/workshop',
                element: <WorkShop />
            },
            {
                path: '/upcoming',
                element: <Upcoming></Upcoming>
            },
            {
                path: '/previous',
                element: <Previous></Previous>
            },
            {
                path: '/allreviews',
                element: <AllReviews />
            },
            {
                path: '/faq',
                element: <AddFAQ />
            }
        ]
    },
    {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
            {
                path: '/profile/importent',
                element: <ImportentLink />
            },
            {
                path: '/profile/profile/orderhistory',
                element: <OrderHistory />
            }
        ]
    },
    {
        path: '/kdptools',
        element: <KdpLayout />,
        children: [
            {
                path: '/kdptools',
                element: <KdpTools />,
            },
            {
                path: '/kdptools/bsrcalculetor',
                element: <BsrCalculetor></BsrCalculetor>
            },
            {
                path: '/kdptools/royaltycalculetor',
                element: <RoyalCalculetor></RoyalCalculetor>
            },
            {
                path: '/kdptools/qrgenaretor',
                element: <QrGenaretor></QrGenaretor>
            },
            {
                path: '/kdptools/categoryfinder',
                element: <CategoryFinder></CategoryFinder>
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