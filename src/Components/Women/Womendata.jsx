
import WomenCard from "./WomenCard";
import useData from "../Hooks/useData";

const Womendata = () => {
  const [dressdata,loading] = useData();
  const womendata = dressdata.filter(item =>  item.category === 'Women');
  console.log(womendata);

    return (
        <div>
             <div >
        <img className="w-full h-[360px]" src="https://i.ibb.co/s5415wY/Womens-Apparels-1-1024x267.jpg" alt="Example" /> 
      </div>
      <div className="justify-center items-center mx-auto flex">
        <h1 className="md:text-3xl mt-7 text-center font-medium border-yellow-600 md:w-[550px]  border-b-2 uppercase items-center justify-center">Womens Exclusive Collection</h1>
      </div>
      <div className="items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 py-16 gap-8  ">
        {womendata?.map(data => (
           <WomenCard key={data?.id} data={data}></WomenCard>
        ))}
      </div> 
        </div>
    );
};

export default Womendata;