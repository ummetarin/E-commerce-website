import { useEffect, useState } from "react";
import TeenCard from "./TeenCard";
import useData from "../Hooks/useData";
import useAllitems from "../Hook/useAllitems";


const Teendata = () => {
  const [dressdata,loading] = useData();
  const[size6,setSize6]=useState(6)
  const[alldress,refetch]=useAllitems()
  const teendata = alldress.filter(item =>  item.category === 'Teen');

    return (
        <div>
        <div className="hero md:h-[470px] bg-gray-400">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div>
   <img className="w-[1800px] h-[400px]" src="https://i.ibb.co/B3qjwcc/1000-F-522939859-pkt5l9t-OUe-Bg-LNgg-OI2lsi29d-DCz628-S-removebg-preview.png"  />
   </div>
    <div className="w-[80%]">
      <h1 className="text-5xl font-bold">Teen Collection!!!</h1>
      <p className="py-6 text-xl font-medium">With Exclusive design and 40-50% discount,Grabe it now </p>
      <button className="btn bg-black text-white">Enjoy it</button>
    </div>
  </div>
</div>
 <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-9 text-center font-medium border-red-700 md:w-[550px]  border-b-2 uppercase items-center justify-center">Teen Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  ">
   {teendata.slice(0,size6).map(data => (
      <TeenCard key={data.id} data={data} dataid={data?._id}></TeenCard>
      
   ))}
 </div> 
 {
  size6<teendata.length && (
    <div className="justify-center flex pt-12">
    <button className="btn bg-gray-600 text-white" onClick={() => setSize6(teendata.length)}>Show All</button>
  </div>
  )
 }
   </div>
    );
};

export default Teendata;