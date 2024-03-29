import { useEffect, useState } from "react";
import Acscard from "./Acscard";
import useData from "../Hooks/useData";


const Acsdata = () => {

  const [dressdata,loading] = useData();
  const acs = dressdata.filter(item =>  item.category === 'Accessories');

    return (
        <div>
        <div>
   <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto"> 
   {acs.map(data => (
      <Acscard key={data.id} data={data}></Acscard>
      
   ))}
 </div> 
   </div>
    );
};

export default Acsdata;