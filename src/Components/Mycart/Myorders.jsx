import useCarts from "../Hook/useCarts";
import { MdDeleteForever } from "react-icons/md";
const Myorders = () => {
    const[cartdata,refetch]=useCarts()
    // console.log(cartdata);
    const totalprice = cartdata.reduce((acc, item) => acc + item.price, 0);
    return (
       <>
      <div className="flex flex-row justify-around md:px-6 ">
      <h1 className=" py-5 text-orange-900 font-bold "  >My order : {cartdata?.length}</h1>
       <h1 className=" py-5 text-orange-900 font-bold"  >Total price :$ {totalprice.toFixed(2)}
       </h1>
      </div>

       <div className="flex justify-end mr-12 mb-3">
        <button  className="text-xl text-white btn bg-orange-600 font-bold">Pay</button>
       </div>

        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr className="bg-gray-500 h-[40px] text-black  font-bold">
             
              <th>Name</th>
              <th>image</th>
              <th>Price</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            cartdata?.map(item=>(
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
       </>
    );
};

export default Myorders;