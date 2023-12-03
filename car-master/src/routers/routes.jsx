import {createBrowserRouter} from "react-router-dom";
import Common from "../share/Common";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleService from "../pages/Service/SingleService";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "../pages/priveteRoute/PrivateRoute";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Common/>,
        children:[
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }, 
            {
                path: 'services/:id',
                element: <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/checkout/${params.id}`)
            },
            {
                path:'bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
]);

export default router