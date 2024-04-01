import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import {  Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const{user,loading}=useContext(AuthContext);
    const location=useLocation()


    if(loading){
        return <><h1>data</h1></>
    }
    if(user){
        return children;
    }

    return <Navigate to='/log' state={{from:location}}></Navigate>
};

export default PrivateRoute;