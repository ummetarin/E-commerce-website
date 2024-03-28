import React, { useEffect, useState } from 'react';
import ChildCard from './ChildCard';

const Childdata = () => {
    const [chi, setChi] = useState([]);

    useEffect(() => {
      fetch('/Mendata.js') // Assuming Mendata.js is in the public directory
        .then(res => res.json())
        .then(data => {
          setChi(data); // Update the state with the fetched data
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
   {chi.map(data => (
      <ChildCard key={data.id} data={data}></ChildCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Childdata;