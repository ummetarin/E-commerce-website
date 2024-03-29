import React, { useEffect, useState } from 'react';
import SportCard from './SportCard';
import useData from '../Hooks/useData';

const Sportdata = () => {
  const [dressdata,loading] = useData();
  const sportdata = dressdata.filter(item =>  item.category === 'Sport');


    return (
        <div>
        <div>
   <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto"> 
   {sportdata.map(data => (
      <SportCard key={data.id} data={data}></SportCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Sportdata;