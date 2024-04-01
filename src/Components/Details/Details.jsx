import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    const handlereview=event=>{
        event.preventDefault();
        const form=event.target
        const name=form.name.value;
        const email=form.email.value;
        const review=form.review.value;
        const star=form.star.value;
        console.log(name,email,review,star);

    }

   const spdata=useLoaderData();
   console.log(spdata);

    const size = [{label:'Small',value:'s'},{label:'Medium',value:'m'},{label:'Large',value:'l'},{label:'Extra Large',value:'xl'}]
    const [selectedSize, setSelectedSize] = useState('m');

    return (
        <div className=" ">
        <div className="rounded-lg pt-32 pb-12 border shadow-sm w-full mx-auto bg-white">
           
     <div className="md:flex-row flex-col justify-center gap-36 items-center flex">
     <div>
      <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold ">{spdata?.name}</h3>
                <p className="text-sm text-gray-500">{spdata?.description}</p>
            </div>
      
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex justify-between items-end">
                    <h2 className="text-2xl  text-center font-bold">${spdata?.price}</h2>
                    <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">Category:{spdata?.category}</p>
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
                <div className="flex items-center mt-4">
                <Link><button className="bg-gray-900 text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button></Link>
            </div>
            </div>
            </div>
      </div>
           
            <div className="">
                    <img className="rounded-lg h-[350px]  bg-gray-600 object-cover w-full " src={spdata?.image} />
                </div>
     </div>
        </div>  

       {/* review */}

       <div className="justify-center flex py-12">
        <h1 className="text-center text-3xl font-medium border-b-2 border-yellow-600 w-[400px]">Lets Give Reviews</h1>
       </div>

       <div className="flex md:flex-row flex-col justify-center items-center pb-12 gap-36">

         <form onSubmit={handlereview} className="flex flex-col gap-4 font-bold ">
            <input type="text" placeholder="Name" name="name" className="bg-base-100 placeholder-black pl-3 text-black border-x-2 border-y-2 border-yellow-600 rounded-lg md:w-[400px] h-[44px]" ></input>
            <input type="email" placeholder="Email" name="email" className="bg-base-100 placeholder-black pl-3 text-black border-x-2 border-y-2 border-yellow-600 rounded-lg md:w-[400px] h-[44px]" ></input>
            <select name="star" type="text"  className="select select-bordered w-[400px] h-[44px]">
              <option disabled selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
            <input type="text" placeholder="Review" name="review" className="bg-base-100 placeholder-black pl-3 text-black border-x-2 border-y-2 border-yellow-600 rounded-lg md:w-[400px] h-[130px]"></input>

            <button className="btn bg-stone-800 text-white">Give Review</button>
         </form>
         <img className="w-[300px]" src="https://i.ibb.co/hLGJN97/review-the-results-of-your-a-b-split-test.jpg" alt="" />

       </div>


       {/* reviewdata */}

       <div className="justify-center flex py-12">
        <h1 className="text-center text-3xl font-medium border-b-2 border-yellow-600 w-[400px]">Reviews </h1>
       </div>
        <div className=" justify-center items-center gap-12">
           
         

         <div className="flex flex-row items-center gap-16">
         <div className="pt-8  flex flex-row justify-start gap-5 items-center ml-12">
            <img src="https://i.ibb.co/jMwfy6J/review.jpg" className="w-[40px] rounded-lg h-[40px]" alt="" />
            <h1>User NAme</h1>
           </div>
           <div className="pt-7">
            <img className="h-6" src="https://i.ibb.co/qMvrKvy/images-2-removebg-preview.png" alt="" />
           </div>
         </div>
          
           <div className="flex flex-row items-center ml-7 py-2">
            <img className="h-[44px]" src="https://i.ibb.co/7kn7Mqb/kisspng-computer-icons-quotation-mark-west-end-tire-comma-quote-marks-5b32ef9557da39-710920021530064.pnghttps://i.ibb.co/7kn7Mqb/kisspng-computer-icons-quotation-mark-west-end-tire-comma-quote-marks-5b32ef9557da39-710920021530064.png" alt="" />
            <h1 className="text-xl font-bold ">review</h1>
            <img className="h-[36px]" src="https://i.ibb.co/jwMWNh0/png-transparent-computer-icons-comma-quotation-mark-inverted-miscellaneous-angle-text-removebg-previ.png" alt="" />
           </div>
       



        </div>


        </div>
    );
};

export default Details;