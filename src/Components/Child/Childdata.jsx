import React, { useEffect, useState } from 'react';
import ChildCard from './ChildCard';
import useData from '../Hooks/useData';
import useAllitems from '../Hook/useAllitems';

const Childdata = () => {
  const [dressdata,loading] = useData();
  const[alldress,refetch]=useAllitems()
  const Childdata = alldress.filter(item =>  item.category === 'Child');
  const[size6,setSize6]=useState(6)

    return (
        <div>
        <div>
   <img className='w-full h-[400px]' src="https://i.ibb.co/y0DBZYP/preview-page0.jpg"  alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-8 text-center font-medium border-yellow-600 md:w-[550px]   border-b-2 uppercase items-center justify-center">Mens Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  "> 
   {Childdata.slice(0,size6).map(data => (
      <ChildCard key={data.id} dataid={data?._id} data={data}></ChildCard>
      
   ))}
 </div> 
 {
  size6<Childdata.length && (
    <div className='flex justify-center pb-12'>
    <button className="btn bg-gray-600 text-white" onClick={() => setSize6(Childdata.length)}>Show All</button>
  </div>
  )
 }
   </div>
    );
};

export default Childdata;