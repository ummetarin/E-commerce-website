import { useContext } from "react";
import useAxios from "../Hook/useAxios";
import { AuthContext } from "../Security/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAlluserdata = () => {
    const axiosSecure=useAxios();
    const {user}=useContext(AuthContext);

    // tanstack query
    const{refetch,data:alluser=[]}=useQuery({
        queryKey:['alluser'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users')
            return res.data
        }
    })
    return [alluser,refetch]
};

export default useAlluserdata;