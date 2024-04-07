import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Security/AuthProvider";
import useAxios from "./useAxios";

const useReview = () => {
    const axiosSecure=useAxios();
    const {user}=useContext(AuthContext);

    // tanstack query
    const{refetch,data:revdata=[]}=useQuery({
        queryKey:['revdata',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/reviews?email=${user?.email}`)
            return res.data
        }
    })
    return [revdata,refetch]
};

export default useReview;