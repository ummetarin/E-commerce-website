import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ChildCard from "../Child/ChildCard";
import { BiSolidCartAdd } from "react-icons/bi";


const DetailsMen = () => {
    const {id}=useParams();
    console.log(id);
    // const data=useLoaderData();
    // console.log(data);

  

    const color = [{label :'Black',value:'Black'},{label :'White',value:'White'},{label :'Brown',value:'Brown'}]
    const size = [{label:'Small',value:'s'},{label:'Medium',value:'m'},{label:'Large',value:'l'},{label:'Extra Large',value:'xl'}]
    // State for handeling radio button
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('m');
    return (
        <div className="pt-36 pb-16">
        <div className="rounded-lg border shadow-sm w-full   mx-auto bg-white">
            {/* Product Title */}
      <div className="flex md:flex-row  justify-center items-center gap-12">
    <div>
    <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
                <p className="text-sm text-gray-500">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
            </div>
            {/* Category and price */}
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex  flex-row gap-5">
                    <h2 className="text-2xl font-medium text-center">$199.99</h2>
                    <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">Category: Clothing</p>
                </div>
             
            {/* Size chossing option */}
            <div>
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="size">
                    Size
                </label>
                <div className="flex items-center gap-3 mt-2" id="size">
                    {
                        size?.map(item => (
                        <label key={item.value} className="text-sm font-medium flex items-center gap-1">
                        <input type="radio" value={item.value} checked={selectedSize === item?.value} onChange={(e) => setSelectedSize(e.target.value)} className="h-4 w-4 rounded-full border-2 cursor-pointer" />
                        {item?.label}
                    </label>))
                    }
                </div>
            </div>
            </div>
            <div className="flex items-center pl-6 mt-3">
                <Link><button className="btn w-[150px] border-b-4 hover:bg-blue-400 border-0 bg-slate-200 border-yellow-700 font-medium"><BiSolidCartAdd /> ADD CART</button></Link>
               
            </div>
    </div>

            <div className="md:mt-8 ">
                <img className="w-[430px] rounded-lg shadow-md h-[350px]" src="https://i.ibb.co/8bw1LMJ/images-8.jpg" alt="" />
            </div>
      </div>
        </div>
        </div>
    );
};

export default DetailsMen;