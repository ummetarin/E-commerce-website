import { MdDeleteForever } from "react-icons/md";
import useReview from "../Hook/useReview";


const MyReviews = () => {
    const[revdata,refetch]=useReview()
    return (
        <div className="py-5">
            <div className="flex flex-row justify-around ">
      <h1 className=" py-5 text-orange-900 font-bold "  >My order : {revdata?.length}</h1>

      </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            revdata?.map(item=>(
                <tr key={item?.id}>
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

export default MyReviews;