


const AddCart = () => {
    
    return (
        <div className="py-6">
       <div className="flex flex-col justify-center items-center  ">
  <div className="w-full md:w-[800px] bg-orange-200 text-black rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-center  mb-4">ADD ITEMS</h2>
    <form className="flex flex-col">
      <div className="flex space-x-4 mb-4">
        <input placeholder="Name" name="name" className=" border-0 rounded-md p-2 w-1/2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
        <input placeholder="Price" name="price" className=" border-0 rounded-md p-2 w-1/2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      </div>
      <input placeholder="Description" name="description" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <input placeholder="Title" name="title" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <input placeholder="Discount" name="discount" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <div className="flex space-x-4 mb-4">
        <input placeholder="Quantity" name="quantity" className=" border-0 rounded-md p-2 w-1/2  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
        <input placeholder="Type" name="title" className=" border-0 rounded-md p-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      </div>
      
      <label className="text-sm mb-2 font-bold cursor-pointer" htmlFor="gender">
        Size
      </label>
      <select name="size" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label className="text-sm mb-2 font-bold cursor-pointer" htmlFor="gender">
        Categories
      </label>
      <select name="category" className=" border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
     
      
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