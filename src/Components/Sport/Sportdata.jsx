import React, { useEffect, useState } from 'react';
import SportCard from './SportCard';

const Sportdata = () => {
    const [spo,setSpo] = useState([]);

    useEffect(() => {
      fetch('/sport.js') // Assuming Mendata.js is in the public directory
        .then(res => res.json())
        .then(data => {
          setSpo(data); // Update the state with the fetched data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
        <div>
        <div>
   <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto"> 
   {spo.map(data => (
      <SportCard key={data.id} data={data}></SportCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Sportdata;