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
import Faq from "../pages/User/Faq/Faq";
import Privacy from "../pages/User/Privacy/Privacy";
import Term from "../pages/User/Term/Term";
import Favorite from "../pages/Favorites/Favorite";
import MostPopular from "../pages/MostPopular/MostPopular";
import Tredding from "../pages/Trending/Tredding";

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
        path: 'favorites',
        element: <Favorite/>
      },
      {
        path: 'trending',
        element: <Tredding/>
      },
      {
        path: 'most_popular',
        element: <MostPopular/>
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
            path: 'faq',
            element: <Faq/>
          },
          {
            path: 'contact',
            element: <ContactUs />
          },
          {
            path: 'terms',
            element: <Term/>
          },
          {
            path: 'privacy',
            element: <Privacy/>
          }
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
