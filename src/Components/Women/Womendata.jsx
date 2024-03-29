
import WomenCard from "./WomenCard";
import useData from "../Hooks/useData";

const Womendata = () => {
  const [dressdata,loading] = useData();
  const womendata = dressdata.filter(item =>  item.category === 'Women');
  console.log(womendata);

    return (
        <div>
             <div>
        <img src="example.jpg" alt="Example" /> 
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 justify-center items-center mx-auto"> 
        {womendata?.map(data => (
           <WomenCard key={data?.id} data={data}></WomenCard>
        ))}
      </div> 
        </div>
    );
};

export default Womendata;