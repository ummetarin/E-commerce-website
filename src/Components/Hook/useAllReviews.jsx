import useAxios from './useAxios';
import { AuthContext } from '../Security/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

const useAllReviews = () => {
    const axiosSecure=useAxios();
    const {user}=useContext(AuthContext);

    // tanstack query
    const{refetch,data:allrevdata=[]}=useQuery({
        queryKey:['allrevdata'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/reviews')
            return res.data
        }
    })
    return [allrevdata,refetch]
};

export default useAllReviews;