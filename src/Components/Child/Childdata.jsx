import React, { useEffect, useState } from 'react';
import ChildCard from './ChildCard';
import useData from '../Hooks/useData';

const Childdata = () => {
  const [dressdata,loading] = useData();
  const Childdata = dressdata.filter(item =>  item.category === 'Accessories');

    return (
        <div>
        <div>
   <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto"> 
   {Childdata.map(data => (
      <ChildCard key={data.id} data={data}></ChildCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Childdata;