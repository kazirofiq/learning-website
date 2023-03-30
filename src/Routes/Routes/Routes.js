import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import OrderDetails from "../../Pages/OrderDetails/OrderDetails";


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
                path: 'payment',
                element: <OrderDetails />
            },
        ]
    }
])

export default router;