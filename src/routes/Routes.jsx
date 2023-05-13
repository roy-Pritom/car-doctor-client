import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../pages/Register/Register";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
      
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