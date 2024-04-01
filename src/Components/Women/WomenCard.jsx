/* eslint-disable react/prop-types */

import ImageZoom from "react-image-zooom";
import 'react-medium-image-zoom/dist/styles.css'
import { Link } from "react-router-dom";
const WomenCard = ({data,dataid}) => {
    return (
        <div>
        <div>
  <div className="max-w-[320px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[330px] bg-white">
 <div className="justify-center flex h-[250px] ">
 <ImageZoom  className="w-full h-[205px]v object-cover  rounded-lg " src={data?.image}></ImageZoom>
 </div>

  <div className="grid gap-2">
      <h1 className="text-lg font-semibold ">{data?.name}</h1>
      <p className="text-sm ">{data?.description}</p>
      <div className="text-lg font-semibold  ">${data?.price}</div>
  </div>
  <div className="flex gap-4">
      <button className="px-6 py-2 bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-950">Add to Cart</button>
         <Link to={`/detail/${dataid}`}> <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button></Link>
  </div>
</div>  
</div>   
  </div>
    );
};

export default WomenCard;