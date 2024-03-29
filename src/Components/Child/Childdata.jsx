import React, { useEffect, useState } from 'react';
import ChildCard from './ChildCard';
import useData from '../Hooks/useData';

const Childdata = () => {
  const [dressdata,loading] = useData();
  const Childdata = dressdata.filter(item =>  item.category === 'Accessories');

    return (
        <div>
        <div>
   <img className='w-full h-[400px]' src="https://i.ibb.co/y0DBZYP/preview-page0.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-7 text-center font-medium border-red-700 md:w-[550px]  border-b-4 uppercase items-center justify-center">Mens Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-12 gap-8  "> 
   {Childdata.map(data => (
      <ChildCard key={data.id} data={data}></ChildCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Childdata;