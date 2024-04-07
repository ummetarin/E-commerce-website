import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Security/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAllOrders = () => {
    const axiosSecure=useAxios();
    const {user}=useContext(AuthContext);

    // tanstack query
    const{refetch,data:allcarddata=[]}=useQuery({
        queryKey:['allcarddata'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/allcarddata')
            return res.data
        }
    })
    return [allcarddata,refetch]
};

export default useAllOrders;