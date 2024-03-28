import { useEffect, useState } from "react";
import TeenCard from "./TeenCard";


const Teendata = () => {
    const [teen, setteen] = useState([]);

    useEffect(() => {
      fetch('/Teen.js') 
        .then(res => res.json())
        .then(data => {
          setteen(data); 
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
   {teen.map(data => (
      <TeenCard key={data.id} data={data}></TeenCard>
      
   ))}
 </div> 
   </div>
    );
};

export default Teendata;