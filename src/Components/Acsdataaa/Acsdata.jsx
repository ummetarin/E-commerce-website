import { useEffect, useState } from "react";
import Acscard from "./Acscard";
import useData from "../Hooks/useData";
import useAllitems from "../Hook/useAllitems";


const Acsdata = () => {

  const [dressdata,loading] = useData();
  const[alldress,refetch]=useAllitems()
  const[size6,setSize6]=useState(6)
  const acs = alldress.filter(item =>  item.category === 'Accessories');

    return (
        <div>
        <div>
   <img className="h-[400px]" src="https://i.ibb.co/cJTfSTS/brown-minimalist-accessories-sale-linkedin-banner-free-editor-template.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-9 text-center font-medium border-yellow-700 md:w-[550px]  border-b-2 uppercase items-center justify-center">Acceceries Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  ">
   {acs.slice(0,size6).map(data => (
      <Acscard key={data.id} dataid={data?._id} data={data}></Acscard>
      
   ))}
 </div> 

 {
  size6<acs.length && (
    <div className="justify-center pb-12 flex">
    <button className="btn bg-gray-600 text-white" onClick={() => setSize6(acs.length)}>Show All</button>
  </div>
  )
 }
   </div>
    );
};

export default Acsdata;