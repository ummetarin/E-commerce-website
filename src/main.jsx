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
import DetailsMen from './Components/AllMenu/DetailsMen';



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
        path:'/mendata/:id',
        element:<DetailsMen></DetailsMen>,
        loader: (params) => fetch(`http://localhost:5000/dress/${params?._id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
