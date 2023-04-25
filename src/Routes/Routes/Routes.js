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
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import AdmindashboardLayout from "../../Pages/AdminDashboard/AdmindashboardLayout/AdmindashboardLayout";
import MyCourse from "../../Pages/AdminDashboard/MyCourse/MyCourse";
import CourseList from "../../Pages/AdminDashboard/CourseList/CourseList";
import DraftCourse from "../../Pages/AdminDashboard/DraftCourse/DraftCourse";

import UpcomingPremimumCourses from "../../Pages/Courses/UpcomingPremimumCourses/UpcomingPremimumCourses";
import FreeCorses from "../../Pages/Courses/FreeCorses/FreeCorses";
import Quiz from "../../Pages/Quiz/Quiz";
import Consultetion from "../../Pages/Consultetion/Consultation";
import Resource from "../../Pages/Resource/Resource";
import WorkShop from "../../Pages/WorkShop/WorkShop";
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
import OrderHistory from "../../Pages/ProfilePage/OrderHistory/OrderHistory";
import AllReviews from "../../Pages/Reviews/AllReviews/AllReviews";


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
                path: '/allreviews',
                element: <AllReviews />
            },
            {
                path: '/upcomingdetails',
                element: <UpComingDetails />
            },
            // {
            //     path: '/reviewmodal',
            //     element: <ReviewModal />
            // }


        ]
    },
    {
        path: '/mycourses',
        element: <CourseLayout />,
        children: [
            {
                path: '/mycourses',
                element: <MyCourses />
            },
            {
                path: '/allreviews',
                element: <AllReviews />
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
        path: '/vedio',
        element: <MyCourseLayout></MyCourseLayout>,
        children: [
            {
                path: '/vedio',
                element: <Vedio />
            },
            {
                path: '/vedio/assignment',
                element: <Assignment></Assignment>
            },
            {
                path: '/vedio/quiz',
                element: <Quiz></Quiz>
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
            {
                path: '/admindashboard/course-create',
                element: <SideCategory />,
                children: [
                    {
                        path: '/admindashboard/course-create',
                        element: <CreateCourse />
                    },
                    {
                        path: '/admindashboard/course-create/course-curriculum',
                        element: <CourseCurriculum />
                    },
                    {
                        path: '/admindashboard/course-create/course-curriculum-quiz',
                        element: <CourseCurriculumQuiz />
                    },
                    {
                        path: '/admindashboard/course-create/AddFAQ',
                        element: <AddFAQ />
                    }
                ]
            },

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
            {
                path: '/admindashboard/upload-Resource',
                element: <UPloadResource />
            },
        ]

    },
])

export default router;