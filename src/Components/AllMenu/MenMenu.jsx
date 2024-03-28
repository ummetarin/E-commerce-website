import React, { useEffect, useState } from "react";
import Mencard from "./Mencard";

const MenMenu = () => {
  const [men, setMen] = useState([]);

  useEffect(() => {
    fetch('/Mendata.js') // Assuming Mendata.js is in the public directory
      .then(res => res.json())
      .then(data => {
        setMen(data); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <>
      <div>
        <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
      </div>
      <div className="items-center justify-center grid grid-cols-3 ">
        {men.map(data => (
           <Mencard key={data.id} data={data}></Mencard>
           
        ))}
      </div>
    </>
  );
};

export default MenMenu;
