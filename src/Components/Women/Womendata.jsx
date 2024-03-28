import { useEffect, useState } from "react";
import WomenCard from "./WomenCard";


const Womendata = () => {
    const [wom, setWom] = useState([]);

  useEffect(() => {
    fetch('/Women.js') 
      .then(res => res.json())
      .then(data => {
        setWom(data);
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 justify-center items-center mx-auto"> 
        {wom.map(data => (
           <WomenCard key={data.id} data={data}></WomenCard>
           
        ))}
      </div> 
        </div>
    );
};

export default Womendata;