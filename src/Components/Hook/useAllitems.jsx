import { useContext } from "react";
import { AuthContext } from "../Security/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useAllitems = () => {
    const axiosSecure=useAxios();
    const {user}=useContext(AuthContext);

    // tanstack query
    const{refetch,data:alldress=[]}=useQuery({
        queryKey:['alldress'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/dress')
            return res.data
        }
    })
    return [alldress,refetch]
};

export default useAllitems;