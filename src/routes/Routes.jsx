import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../pages/Register/Register";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader:({params})=>fetch(`https://car-doctor-server-bice-two.vercel.app/services/${params.id}`)
        },
        {
            path:'/bookings',
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }

      
      ]
    },
    {
        path:"/login",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/login/signUp',
                element:<Register></Register>
            }

        ]
    }
  ]);

  export default router;