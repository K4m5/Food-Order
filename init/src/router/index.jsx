import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Verification from "../pages/Auth/Verification";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProfileLayout from "../layouts/ProfileLayout";
import Profile from "../pages/User/Profile/Profile";
import ContactUs from "../pages/Contact/ContactUs";
import NotFound from "../pages/Error/404";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        // 404 page
        path: '*',
        element: <NotFound/>
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '',
        element:<ProfileLayout/>,
        children:[
          {
            path: 'profile',
            element: <Profile/>
          },         
          {
            path: 'contact',
            element: <ContactUs />
          },
        ]
      }

    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
      {
        path: "/verify",
        element: <Verification />,
      },
    ],
  },
]);

export default router;
