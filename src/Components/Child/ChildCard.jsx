/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext, useState } from "react";
import ImageZoom from "react-image-zooom";
import 'react-medium-image-zoom/dist/styles.css'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Security/AuthProvider";
import { BiSolidCartAdd } from "react-icons/bi";
import useCarts from "../Hook/useCarts";

const ChildCard = ({data,dataid}) => {
  const currentDateAndTime = new Date();
  const date = `${currentDateAndTime.getDate()}-${currentDateAndTime.getMonth() + 1}-${currentDateAndTime.getFullYear()} `;
  const time=`${currentDateAndTime.getHours()}:${currentDateAndTime.getMinutes()}:${currentDateAndTime.getSeconds()}`

  const{user}=useContext(AuthContext);
  const[,refetch]=useCarts()
  const{name,price,description,image,size}=data;
  const navigate=useNavigate()
  const [selectedSize, setSelectedSize] = useState('');
    const handleaddcart=food=>{
      if(user && user?.email){
         const carditem ={
          dataid,
          name,image,price,description,size,email:user?.email, size: selectedSize,date:date,time:time
         }

         axios.post('http://localhost:5000/addcard',carditem)
         .then(res=>{
          // console.log(res.data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Order Done",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
         })
      }
      else{
        Swal.fire({
          title: "You are not Logged in",
          text: "Please Login for add to card!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/log',{state:{from:location}})
          }
        });
      }

    }
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

    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="size">
                  Size
              </label>
              <div className="flex items-center gap-3 mt-2 pt-2 pb-3" id="size">
                                  <select name="size"  value={selectedSize} // Set the value to the selected size
              onChange={(e) => setSelectedSize(e.target.value)} className="select select-bordered w-[200px] h-[44px]">
                                      {data?.size.map((size, index) => (
                                          <option key={index} value={size}>{size}</option>
                                      ))}
                                  </select>
                              </div>
</div>
<div className="flex gap-4">
    <button onClick={()=>handleaddcart(data)} className="px-12 py-2 bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-950"><BiSolidCartAdd /></button>
       <Link to={`/detail/${dataid}`}> <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button></Link>
</div>
</div>  
</div>   
</div>
    );
};

export default ChildCard;