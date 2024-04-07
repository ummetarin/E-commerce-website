import { MdDeleteForever } from "react-icons/md";
import useAllOrders from "../Hook/useAllOrders";

const AllOrder = () => {
    const [allcarddata,refetch]=useAllOrders()

    return (
        <div>
          <div className="flex flex-row justify-around md:px-6 ">
      <h1 className=" py-5 text-orange-900 font-bold "  >My order : {allcarddata?.length}</h1>
      </div>
        <div className="overflow-x-auto md:w-full sm:w-[400px] w-[300px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-500 h-[40px] text-black  font-bold">
             
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Size</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* row 1 */}
           {
            allcarddata?.map(item=>(
                <tr className="bg-gray-100  border-r-4 border-black" key={item?.id}>
                <td>
                   {item?.name}
                </td>
                 <td>
                  <div>
                    <img className="w-16 h-12 rounded-lg" src={item?.image} alt="" />
                  </div>
                 </td>
                 <td>
                  <div>
                    <p>${item?.price}</p>
                  </div>
                
                 </td>
                 <td>
                 <div>
                    {item?.size}
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

export default AllOrder;