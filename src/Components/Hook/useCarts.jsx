import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Security/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useCarts = () => {
    const axiosSecure=useAxios();
    const {user}=useContext(AuthContext);

    // tanstack query
    const{refetch,data:carddata=[]}=useQuery({
        queryKey:['carddata',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/addcard?email=${user?.email}`)
            return res.data
        }
    })
    return [carddata,refetch]
};

export default useCarts;