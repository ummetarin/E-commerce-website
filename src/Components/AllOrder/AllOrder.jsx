import { MdDeleteForever } from "react-icons/md";
import useAllOrders from "../Hook/useAllOrders";

const AllOrder = () => {
    const [allcarddata,refetch]=useAllOrders()

    return (
        <div>
          <div className="flex flex-row justify-around md:px-6 ">
      <h1 className=" py-5 text-orange-900 font-bold "  >My order : {allcarddata?.length}</h1>
      </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th>image</th>
              <th>Price</th>
              <th>Size</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            allcarddata?.map(item=>(
                <tr key={item?.id}>
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