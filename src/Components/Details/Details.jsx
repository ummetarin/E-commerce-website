import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Security/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useCarts from "../Hook/useCarts";
import AllReviews from "./AllReviews";


const Details = () => {
    const spdata=useLoaderData();



    const [,refetch]=useCarts()
    const currentDateAndTime = new Date();
    const date = `${currentDateAndTime.getDate()}-${currentDateAndTime.getMonth() + 1}-${currentDateAndTime.getFullYear()} `;
    const time=`${currentDateAndTime.getHours()}:${currentDateAndTime.getMinutes()}:${currentDateAndTime.getSeconds()}`
  
    const{user}=useContext(AuthContext);
    const{name,price,description,image,size}=spdata;
    const navigate=useNavigate()
    const [selectedSize, setSelectedSize] = useState('');

    const[selstar,Setstar]=useState('')
    // addcartwork 
      const handleaddcart=food=>{
        if(user && user?.email){
           const carditem ={
            name,image,price,description,size,email:user?.email, size: selectedSize,date:date,time:time
           }
  
           axios.post('http://localhost:5000/addcard',carditem)
           .then(res=>{
            // console.log(res.data);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Order Done",
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
           })
        }
        else{
          Swal.fire({
            title: "You are not Logged in",
            text: "Please Login for add to card!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/log',{state:{from:location}})
            }
          });
        }
}

// review
const handlereview = (e, id) => {
  e.preventDefault(); 
  const name = e.target.name.value;
  const email = e.target.email.value;
  const review = e.target.review.value;
  const star = parseInt(selstar);
  if (user && user.email) {
      const reviewdata = {
        id,
          name,
          email,
          star,
          date,
          time,
          review
      }
    
      axios.post('http://localhost:5000/reviews',reviewdata)
      .then(res=>{
       Swal.fire({
         position: "top-center",
         icon: "success",
         title: "Review Done",
         showConfirmButton: false,
         timer: 1500
       });
       refetch()
      })
     
  }
  else{
    Swal.fire({
      title: "You are not Logged in",
      text: "Please Login for add to card!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/log',{state:{from:location}})
      }
    });
  }
}


    return (
        <div className=" ">
        <div className="rounded-lg pt-32 pb-12 border shadow-sm w-full mx-auto bg-white">
           
     <div className="md:flex-row flex-col justify-center gap-36 items-center flex">
     <div>
      <div className="flex flex-col space-y-1.5 p-3">
                <h3 className="text-3xl font-semibold ">{spdata?.name}</h3>
                <p className="text-sm text-gray-500">{spdata?.description}</p>
            </div>
      
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex justify-between items-end">
                    <h2 className="text-2xl  text-center font-bold">${spdata?.price}</h2>
                    <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">Category:{spdata?.category}</p>
                </div>
                
                
            {/* Size chossing option */}
            <div className="">
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="size">
                    Size
                </label>

                <div className="flex items-center gap-3 mt-2 pt-2 pb-3" id="size">
                                  <select name="size"  value={selectedSize} // Set the value to the selected size
              onChange={(e) => setSelectedSize(e.target.value)} className="select select-bordered w-[200px] h-[44px]">
                                      {spdata?.size.map((size, index) => (
                                          <option key={index} value={size}>{size}</option>
                                      ))}
                                  </select>
                              </div>

                
                <div className="flex items-center mt-4">
                <Link><button  onClick={()=>handleaddcart(spdata)} className="bg-gray-900 text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button></Link>
            </div>
            </div>
            </div>
      </div>
           
            <div className="">
                    <img className="rounded-lg w-[400px] h-[390px]  bg-gray-600 object-cover  " src={spdata?.image} />
                </div>
     </div>
        </div>  

       {/* review */}

       <div className="justify-center flex py-12">
        <h1 className="text-center text-3xl font-medium border-b-2 border-yellow-600 w-[400px]">Lets Give Reviews</h1>
       </div>

       <div className="flex md:flex-row flex-col justify-center items-center pb-12 gap-36">

       <form onSubmit={(e) => handlereview(e, spdata?._id)} className="flex flex-col gap-4 font-bold">
    <input type="text" placeholder="Name" name="name" className="bg-base-100 placeholder-black pl-3 text-black border-x-2 border-y-2 border-yellow-600 rounded-lg md:w-[400px] h-[44px]" />
    <input type="email" placeholder="Email" name="email" className="bg-base-100 placeholder-black pl-3 text-black border-x-2 border-y-2 border-yellow-600 rounded-lg md:w-[400px] h-[44px]" />
    <select onChange={(e) => Setstar(e.target.value)} value={selstar} name="star" className="select select-bordered w-[400px] h-[44px]">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>


            <input type="text" placeholder="Review" name="review" className="bg-base-100 placeholder-black pl-3 text-black border-x-2 border-y-2 border-yellow-600 rounded-lg md:w-[400px] h-[130px]"></input>

            <button type="submit" className="btn bg-stone-800 text-white">Give Review</button>
         </form>
         <img className="w-[300px]" src="https://i.ibb.co/hLGJN97/review-the-results-of-your-a-b-split-test.jpg" alt="" />

       </div>


       {/* reviewdata */}

       <div className="justify-center flex py-12">
        <h1 className="text-center text-3xl font-medium border-b-2 border-yellow-600 w-[400px]">Reviews </h1>
       </div>
        <div className=" justify-center items-center gap-12">
           
         

         <AllReviews revid={spdata?._id}></AllReviews>



        </div>


        </div>
    );
};

export default Details;