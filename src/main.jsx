import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainpage from './Components/Home/Mainpage';
import Homedata from './Components/Homedata/Homedata';
import MenMenu from './Components/AllMenu/MenMenu';
import Womendata from './Components/Women/Womendata';
import Teendata from './Components/Teen/Teendata';
import Acsdata from './Components/Acsdataaa/Acsdata';
import Childdata from './Components/Child/Childdata';
import Sportdata from './Components/Sport/Sportdata';
import Details from './Components/Details/Details';
import AuthProvider from './Components/Security/AuthProvider';
import Login from './Components/Security/Login';
import Register from './Components/Security/Register';
import PrivateRoute from './Components/Security/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    children:[
      {
        path:'/',
        element:<Homedata></Homedata>
      
      },{
        path:'/men',
        element:<MenMenu></MenMenu>
      },{
        path:'/wom',
        element:<Womendata></Womendata>
      },{
        path:'/teen',
        element:<Teendata></Teendata>
      },{
        path:'/acs',
        element:<Acsdata></Acsdata>
      },{
        path:'/child',
        element:<Childdata></Childdata>
      },{
        path:'/sport',
        element:<Sportdata></Sportdata>
      },{
        path:'/detail/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/dress/${params.id}`)
      },{
        path:'/log',
        element:<Login></Login>
      },{
        path:'/res',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
