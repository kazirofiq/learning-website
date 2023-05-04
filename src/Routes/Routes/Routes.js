import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PremiumCourseHome from "../../Pages/Home/PremiumCourse/PremiumCourseHome/PremiumCourseHome";
import OrderDetails from "../../Pages/OrderDetails/OrderDetails";
import MyCourseLayout from "../../Layout/MyCourseLayout";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
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
import BsrCalculetor from "../../Pages/KdpTools/BsrCalculetor/BsrCalculetor";
import SideCategory from "../../Pages/CreateCourse/SideCategory/SideCategory";
import CourseCurriculum from "../../Pages/CourseCurriculum/CourseCurriculum";
import CourseCurriculumQuiz from "../../Pages/CourseCurriculum/CourseCurriculumQuiz/CourseCurriculumQuiz";
import CreateCourse from "../../Pages/CreateCourse/CreateCourse";
import KdpTools from "../../Pages/KdpTools/KdpTools/KdpTools";
import RoyalCalculetor from "../../Pages/KdpTools/RoyaltyCalculetor/RoyalCalculetor";
import UPloadResource from "../../Pages/UploadResource/UPloadResource";
import KdpLayout from "../../Layout/KdpLayout";
import QrGenaretor from "../../Pages/KdpTools/QrGenaretor/QrGenaretor";
import CategoryFinder from "../../Pages/KdpTools/CategoryFinder/CategoryFinder";
import Upcoming from "../../Pages/WorkShop/Upcoming/Upcoming";
import Previous from "../../Pages/WorkShop/Previous/Previous";
import ProfileLayout from "../../Layout/ProfileLayout";
import ImportentLink from "../../Pages/ProfilePage/ImportentLink/ImportentLink";
import OrderHistory from "../../Pages/ProfilePage/OrderHistory/OrderHistory";
import AllReviews from "../../Pages/Reviews/AllReviews/AllReviews";
import MyCourses from "../../Pages/Courses/MyCourses/MyCourses";
import PreviousWorkshop from "../../Pages/Courses/PreviousWorkshop/PreviousWorkshop";
import CourseLayout from "../../Layout/CourseLayout";
import WorkShopLayout from "../../Layout/WorkShopLayout";
import UpComingDetails from "../../Pages/WorkShop/UpComingDetails/UpComingDetails";
import Vedio from "../../Pages/CourseVedio/Vedio/Vedio";
import AddFAQ from "../../Pages/Home/PremiumCourse/AddFAQ/AddFAQ";
import StudentDashboardLayout from "../../Pages/StudentDashboard/StudentDashboardLayout/StudentDashboardLayout";
import StudentDashboard from "../../Pages/StudentDashboard/StudentDashboard/StudentDashboard";
import StudentMarks from "../../Pages/StudentDashboard/StudentsMark/StudentMarks";
import LeaderBoard from "../../Pages/StudentDashboard/LeaderBoard/LeaderBoard";
import AboutUs from "../../Pages/Shared/Footer/AboutUs/AboutUs";
import PrivacyPolicy from "../../Pages/Shared/Footer/PrivacyPolicy/PrivacyPolicy";
import Refund from "../../Pages/Shared/Footer/Refund/Refund";
import TermsAndConditions from "../../Pages/Shared/Footer/TermsAndConditions/TermsAndConditions";
import Planner from "../../Pages/ProfilePage/Planner/Planner";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";


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
                element: <PremiumCourseHome />
            },
            {
                path: '/payment',
                element: <PrivateRoute><OrderDetails /></PrivateRoute>
            },
            {
                path: '/upcomingpremimumcourse',
                element: <PrivateRoute><UpcomingPremimumCourses /></PrivateRoute>
            },
            {
                path: '/freecorses',
                element: <PrivateRoute><FreeCorses /></PrivateRoute>
            },
            {
                path: '/consultetion',
                element: <PrivateRoute><Consultetion /></PrivateRoute>
            },
            {
                path: '/resource',
                element: <PrivateRoute><Resource /></PrivateRoute>
            },
            {
                path: '/allreviews',
                element: <PrivateRoute><AllReviews /></PrivateRoute>
            },
            {
                path: '/upcomingdetails',
                element: <PrivateRoute><UpComingDetails /></PrivateRoute>
            },
            // footer text route
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy />
            },
            {
                path: '/termsAndCondition',
                element: <TermsAndConditions />
            },
            {
                path: '/refund',
                element: <Refund />
            },


        ]
    },
    // {
    //     path: '/verify-email/',
    //     element: <VerifyEmail></VerifyEmail>
    // },
    {
        path: '/mycourses',
        element: <PrivateRoute><CourseLayout /></PrivateRoute>,
        children: [
            {
                path: '/mycourses',
                element: <MyCourses />
            },
            {
                path: '/mycourses/previousworkshop',
                element: <PreviousWorkshop />
            }
        ]
    },
    {
        path: '/workshop',
        element: <PrivateRoute><WorkShopLayout /></PrivateRoute>,
        children: [
            {
                path: '/workshop/upcoming',
                element: <Upcoming />
            },
            {
                path: '/workshop/previous',
                element: <Previous></Previous>
            },
        ]
    },
    {
        path: '/profile',
        element: <PrivateRoute><ProfileLayout /></PrivateRoute>,
        children: [
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/profile/importent',
                element: <ImportentLink />
            },
            {
                path: '/profile/Planner',
                element: <Planner />
            },
            {
                path: '/profile/orderhistory',
                element: <OrderHistory />
            }
        ]
    },
    {
        path: '/kdptools',
        element: <PrivateRoute><KdpLayout /></PrivateRoute>,
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
        element: <AdminRoute><AdmindashboardLayout></AdmindashboardLayout></AdminRoute>,
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
                        path: '/admindashboard/course-create/course-curriculum/:courseId',
                        element: <CourseCurriculum />
                    },
                    {
                        path: '/admindashboard/course-create/course-curriculum-quiz',
                        element: <CourseCurriculumQuiz />
                    },
                    {
                        path: '/admindashboard/course-create/AddFAQ/:courseId',
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
    {
        path: '/student-dashboard',
        element: <PrivateRoute><StudentDashboardLayout></StudentDashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/student-dashboard',
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: '/student-dashboard/analytic',
                element: <StudentMarks></StudentMarks>
            },
            {
                path: '/student-dashboard/leader-board',
                element: <LeaderBoard></LeaderBoard>
            },
        ]
    },
])

export default router;