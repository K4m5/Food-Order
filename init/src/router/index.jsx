import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import {
  Checkout,
  ContactUs,
  Faq,
  Foods,
  Home,
  Login,
  Map,
  MostPopular,
  MyOrder,
  NotFound,
  Offers,
  OrderSuccess,
  Privacy,
  Profile,
  Search,
  Signup,
  Term,
  Tredding,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        // 404 page
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orderSuccess",
        element: <OrderSuccess />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "trending",
        element: <Tredding />,
      },
      {
        path: "most_popular",
        element: <MostPopular />,
      },
      {
        path: "foods/:id",
        element: <Foods />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "",
        element: <ProfileLayout />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "contact",
            element: <ContactUs />,
          },
          {
            path: "terms",
            element: <Term />,
          },
          {
            path: "privacy",
            element: <Privacy />,
          },
          {
            path: "my_order",
            element: <MyOrder />,
          },
        ],
      },
    ],
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
    ],
  },
]);

export default router;
