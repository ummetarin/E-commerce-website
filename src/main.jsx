import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainpage from './Components/Home/Mainpage';
import Homedata from './Components/Homedata/Homedata';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    children:[
      {
        path:'/home',
        element:<Homedata></Homedata>
      
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
