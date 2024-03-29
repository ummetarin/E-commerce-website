import React, { useEffect, useState } from "react";
import Mencard from "./Mencard";
import useData from "../Hooks/useData";

const MenMenu = () => {
  const [dressdata,loading] = useData();
  const mendata = dressdata.filter(item =>  item.category === 'Men');

  return (
    <>
      <div>
        <img src="example.jpg" alt="Example" /> {/* Provide a valid image source */}
      </div>
      <div className="items-center justify-center grid grid-cols-3 ">
        {mendata.map(data => (
           <Mencard key={data.id} data={data}></Mencard>
           
        ))}
      </div>
    </>
  );
};

export default MenMenu;
