import { MdDeleteForever } from "react-icons/md";
import useAlluserdata from "../Hooks/useAlluserdata";


const AllUser = () => {
    const[alluser,refetch]=useAlluserdata()
    return (
        <div>
      
      <div className="overflow-x-auto md:w-full sm:w-[400px] w-[300px]">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-gray-500 h-[40px] text-black  font-bold">
           
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {/* row 1 */}
         {
          alluser?.map(item=>(
              <tr className="bg-gray-100  border-r-4 border-black" key={item?.id}>
              <td>
                 {item?.name}
              </td>
               <td>
                <div>
                  <p>{item?.email}</p>
                </div>
               </td>
              
           
               <td>
                  <button className="btn bg-orange-500 text-white">Admin</button>
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

export default AllUser;