import { useEffect, useState } from "react";
import Acscard from "./Acscard";


const Acsdata = () => {

    const [acs, setAcs] = useState([]);

    useEffect(() => {
      fetch('/acs.js')
        .then(res => res.json())
        .then(data => {
          setAcs(data); 
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
   {acs.map(data => (
      <Acscard key={data.id} data={data}></Acscard>
      
   ))}
 </div> 
   </div>
    );
};

export default Acsdata;