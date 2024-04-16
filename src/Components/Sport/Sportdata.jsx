import React, { useEffect, useState } from 'react';
import SportCard from './SportCard';
import useAllitems from '../Hook/useAllitems';

const Sportdata = () => {

  const[alldress,refetch]=useAllitems()
  const[size6,setSize6]=useState(6)
  const sportdata = alldress.filter(item =>  item.category === 'Sport');


    return (
        <div>
        <div>
   <img className='w-full' src="https://i.ibb.co/pZsQStH/216994398-116745723998005-2890932197924147188-n.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-8 text-center font-medium border-yellow-600 md:w-[550px]  border-b-2 uppercase items-center justify-center">Sport Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  ">
   {sportdata.slice(0,size6).map(data => (
      <SportCard key={data.id} data={data} dataid={data?._id}></SportCard>
      
   ))}
 </div> 
 {
  size6<sportdata.length && (
    <div className='justify-center pt-12 flex'>
    <button className="btn bg-gray-600 text-white" onClick={() => setSize6(sportdata.length)}>Show All</button>
  </div>
  )
 }
   </div>
    );
};

export default Sportdata;