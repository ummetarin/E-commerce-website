import { MdDeleteForever } from "react-icons/md";
import useAllReviews from "../Hook/useAllReviews";

const AllReviews = () => {
   
    const [allrevdata,refetch]=useAllReviews()

    return (
        <div className="py-5">
        <div className="flex flex-row justify-around ">
  <h1 className=" py-5 text-orange-900 font-bold "  >My order : {allrevdata?.length}</h1>

  </div>
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr className="bg-gray-700 h-[40px]  text-white  font-bold">
         
          <th>Name</th>
          <th>Price</th>
          <th>Date</th>
          <th>Review</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
       {
        allrevdata?.map(item=>(
            <tr className="bg-gray-100  border-r-4 border-black" key={item?.id}>
            <td>
               {item?.name}
            </td>
             
             <td>
              <div>
                <p>${item?.email}</p>
              </div>
             </td>       
             <td>
                <div>
                    <p>{item?.review}</p>
                </div>
                 </td>      <td>
                
            <div>
                <p>{item?.date}</p>
            </div>
             </td>
            <td>
                <button className="btn"><MdDeleteForever className="text-2xl text-red-500" /></button>
            </td>
           </tr>
        ))
       }
      </tbody>
      {/* foot */}
      
      
    </table>
  </div>
    </div>
    );
};

export default AllReviews;