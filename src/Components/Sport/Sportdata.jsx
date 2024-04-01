import React, { useEffect, useState } from 'react';
import SportCard from './SportCard';
import useData from '../Hooks/useData';

const Sportdata = () => {
  const [dressdata,loading] = useData();
  const sportdata = dressdata.filter(item =>  item.category === 'Sport');


    return (
        <div>
        <div>
   <img className='w-full' src="https://i.ibb.co/pZsQStH/216994398-116745723998005-2890932197924147188-n.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-8 text-center font-medium border-yellow-600 md:w-[550px]  border-b-2 uppercase items-center justify-center">Sport Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  ">
   {sportdata.map(data => (
      <SportCard key={data.id} data={data} dataid={data?._id}></SportCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Sportdata;