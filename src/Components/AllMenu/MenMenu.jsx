import React, { useEffect, useState } from "react";
import Mencard from "./Mencard";
import useData from "../Hooks/useData";

const MenMenu = () => {
  const [dressdata,loading] = useData();
  const[size6,setSize6]=useState(6)
  const mendata = dressdata.filter(item =>  item.category === 'Men');
  // console.log(mendata);
  return (
    <>
      <div>
        <img src="https://i.ibb.co/09tGs2V/SVnPn.png" alt="Example" /> {/* Provide a valid image source */}
      </div>
      <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-8 text-center font-medium border-yellow-600 md:w-[550px]  border-b-2  uppercase items-center justify-center">Mens Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  ">
        {mendata.slice(0, size6).map(data => (
          <Mencard key={data.id} dataid={data?._id} data={data}></Mencard>
        ))}
      </div>
      {size6 < mendata.length && (
        <div className="justify-center flex pb-12">
          <button className="btn bg-gray-600 text-white" onClick={() => setSize6(mendata.length)}>Show All</button>
        </div>
      )}

    </>
  );
};

export default MenMenu;
