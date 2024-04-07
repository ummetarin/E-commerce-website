import React from "react";
import ReactDOM from "react-dom/client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Mainpage from "./Components/Home/Mainpage";
import Homedata from "./Components/Homedata/Homedata";
import MenMenu from "./Components/AllMenu/MenMenu";
import Womendata from "./Components/Women/Womendata";
import Teendata from "./Components/Teen/Teendata";
import Acsdata from "./Components/Acsdataaa/Acsdata";
import Childdata from "./Components/Child/Childdata";
import Sportdata from "./Components/Sport/Sportdata";
import Details from "./Components/Details/Details";
import AuthProvider from "./Components/Security/AuthProvider";
import Login from "./Components/Security/Login";
import Register from "./Components/Security/Register";
import PrivateRoute from "./Components/Security/PrivateRoute";
import DashBoard from "./Components/DashBoard/DashBoard";
import Myorders from "./Components/Mycart/Myorders";
import MyReviews from "./Components/Mycart/MyReviews";
import AllOrder from "./Components/AllOrder/AllOrder";
import AllReviews from "./Components/AllOrder/AllReviews";
import AddCart from "./Components/AddCart/AddCart";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    children: [
      {
        path: "/",
        element: <Homedata></Homedata>,
      },
      {
        path: "/men",
        element: <MenMenu></MenMenu>,
      },
      {
        path: "/wom",
        element: <Womendata></Womendata>,
      },
      {
        path: "/teen",
        element: <Teendata></Teendata>,
      },
      {
        path: "/acs",
        element: <Acsdata></Acsdata>,
      },
      {
        path: "/child",
        element: <Childdata></Childdata>,
      },
      {
        path: "/sport",
        element: <Sportdata></Sportdata>,
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dress/${params.id}`),
      },
      {
        path: "/log",
        element: <Login></Login>,
      },
      {
        path: "/res",
        element: <Register></Register>,
      },
    ],
  

  },
  {
    path:'/dash',
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:'/dash/ord',
        element:<Myorders></Myorders>
      },{
        path:'/dash/rev',
        element:<MyReviews></MyReviews>
      },{
        path:'/dash/allorder',
        element:<AllOrder></AllOrder>
      },{
        path:'/dash/allrev',
        element:<AllReviews></AllReviews>
      },{
        path:'/dash/add',
        element:<AddCart></AddCart>
    
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
