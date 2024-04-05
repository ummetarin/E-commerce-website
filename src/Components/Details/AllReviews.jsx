import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";
import Review from "./Review";

const AllReviews = ({ revid }) => {
    const axiosSecure = useAxios();

    const { refetch, data: reviewdata = [] } = useQuery({
        queryKey: ['Eachreviews', revid],
        queryFn: async () => {
            const res = await axiosSecure.get(`/Eachreviews/${revid}`);
            return res.data;
        }
    });

    const handlerefresh=()=>{
        refetch()
    }

    return (
       <>
      
       
       <div className="grid grid-cols-1 md:grid-cols-2 px-24 pb-6 pt-8 gap-4 justify-center items-center mx-auto">
            {reviewdata?.map(data => (
                <Review key={data?.revid} data={data} refetch={refetch}></Review>
            ))}
        </div>

        <div className="justify-center flex pt-2 pb-24">
        <button className="btn  bg-slate-700 text-white" onClick={handlerefresh} >Refresh Reviews</button>
       </div>
       
       </>
    );
};

export default AllReviews;
