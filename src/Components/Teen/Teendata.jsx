import { useEffect, useState } from "react";
import TeenCard from "./TeenCard";
import useData from "../Hooks/useData";


const Teendata = () => {
  const [dressdata,loading] = useData();
  const teendata = dressdata.filter(item =>  item.category === 'Teen');

    return (
        <div>
        <div>
   <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto"> 
   {teendata.map(data => (
      <TeenCard key={data.id} data={data}></TeenCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Teendata;