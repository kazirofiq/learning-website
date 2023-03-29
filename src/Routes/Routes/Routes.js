import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import PremiumCourseHome from "../../Pages/Home/PremiumCourse/PremiumCourseHome/PremiumCourseHome";


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
                path: '/premium_course',
                element: <PremiumCourseHome></PremiumCourseHome>
            }
        ]
    }
])

export default router;