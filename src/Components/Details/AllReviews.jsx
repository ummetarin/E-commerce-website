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

    return (
        <div>
            {reviewdata?.map(data => (
                <Review key={data?.revid} data={data} refetch={refetch}></Review>
            ))}
        </div>
    );
};

export default AllReviews;
