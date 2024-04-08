import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'


const AddCart = () => {
  
  const [showName,setShowName] = useState({})

    const handleallitems=e=>{
      
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const price=form.price.value;
        const discount=form.price.value;
        const type=form.type.value;
        const title=form.title.value;
        const category=form.category.value;
        const quantity=form.quantity.value;
        const description=form.description.value;
        const image=form.image.value;
        const size = form.size.value.split(',');

        const alldatainfo={
            name,price,discount,type,title,category,size,quantity,description,image
        }
 
        console.log(alldatainfo);
        axios.post('http://localhost:5000/dress',alldatainfo)
                .then(res=>{
                 Swal.fire({
                   position: "top-center",
                   icon: "success",
                   title: "Added Successfully",
                   showConfirmButton: false,
                   timer: 1500
                 });
                })



        


    }

    return (
        <div className="py-6">
       <div className="flex flex-col justify-center items-center  ">
  <div className="w-full md:w-[800px] bg-orange-200 text-black rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-center  mb-4">ADD ITEMS</h2>
    <form onSubmit={handleallitems} className="flex flex-col">
      <div className="flex space-x-4 mb-4">
        <input placeholder="Name" name="name" className=" border-0 rounded-md p-2 w-1/2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
        <input placeholder="Price" name="price" className=" border-0 rounded-md p-2 w-1/2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      </div>
      <input placeholder="Description" name="description" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <input placeholder="Title" name="title" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <input placeholder="Discount" name="discount" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <div className="flex space-x-4 mb-4">
        <input placeholder="Quantity" name="quantity" className=" border-0 rounded-md p-2 w-1/2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
        <input placeholder="Type" name="type" className=" border-0 rounded-md p-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      </div>
      

  <div className="pb-5">
  <input type="text" name="size" placeholder="Size" className="w-full border-0 rounded-md p-2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"   />
  </div>
  <select name="category" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
    <option value="male">Men</option>
    <option value="female">Women</option>
    <option value="other">Teen</option>
    <option value="female">Sport</option>
    <option value="other">Child</option>
    <option value="other">Acceceries</option>
  </select>
  

      <div>
        <input type="text" name="image" placeholder="PhotoURL" className=" border-0 rounded-md p-2 mb-4 w-full  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />
      </div>
     
      
      <button className="bg-red-400 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">
        ADD
      </button>
    </form>
  </div>
</div>

        </div>
    );
};

export default AddCart;