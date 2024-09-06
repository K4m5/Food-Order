import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import {
  ForgotPassword,
  Login,
  Signup,
  Verification,
  NotFound,
  Favorite,
  Home,
  MostPopular,
  Search, 
  Tredding, 
  ContactUs,
  Faq, 
  MyOrder, 
  Privacy, 
  Profile,
  Term, 
  Checkout,
  OrderSuccess, 
  Restaurant, 
  Offers, 
  Map
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        // 404 page
        path: "*",
        element: <NotFound/>
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "checkout",
        element: <Checkout/>
      },
      {
        path: "orderSuccess",
        element: <OrderSuccess/>
      },
      {
        path: "/search",
        element: <Search/>
      },
      {
        path: "offers",
        element: <Offers/>
      },
      {
        path: "favorites",
        element: <Favorite/>
      },
      {
        path: "trending",
        element: <Tredding/>
      },
      {
        path: "most_popular",
        element: <MostPopular/>
      },
      {
        path: "restaurant",
        element: <Restaurant/>
      },
      {
        path: "map",
        element: <Map/>
      },
      {
        path: "",
        element:<ProfileLayout/>,
        children:[
          {
            path: "profile",
            element: <Profile/>
          },         
          {
            path: "faq",
            element: <Faq/>
          },
          {
            path: "contact",
            element: <ContactUs/>
          },
          {
            path: "terms",
            element: <Term/>
          },
          {
            path: 'privacy',
            element: <Privacy/>
          },
          {
            path: "my_order",
            element: <MyOrder/>
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
