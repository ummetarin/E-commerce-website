import { MdDeleteForever } from "react-icons/md";
import useAllitems from "../Hook/useAllitems";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineUpdate } from "react-icons/md";



const Allitems = () => {
    const[alldress,refetch]=useAllitems()
    return (
        <div>
            <div>
          <div className="flex flex-row justify-around md:px-6 ">
      <h1 className=" py-5 text-orange-900 font-bold "  >Number Of Items : {alldress?.length}</h1>
      </div>
        <div className="overflow-x-auto md:w-full sm:w-[400px] w-[300px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-500 h-[40px] text-black  font-bold">
             
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Update</th>
              <th>Discount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* row 1 */}
           {
            alldress?.map(item=>(
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
                    <h1>Update</h1>
                 </div>
                 </td>
                 <td>
                <div>
                <h1>Discount</h1>
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
        </div>
    );
};

export default Allitems;