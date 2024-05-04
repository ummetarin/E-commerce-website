import useAllitems from "../Hook/useAllitems";


const TopProduct = () => {
    const[alldress,refetch]=useAllitems()
    console.log(alldress);
    return (
        <div>
              {
                alldress?.map(item=>{
                    <div key={item._id} className="max-[350px] mx-auto space-y-6 rounded-2xl  px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
        {/* Card Image */}
        <img width={350} height={190} className="h-[190px] w-[350px] rounded-2xl bg-gray-400" src={'https://source.unsplash.com/350x190/?furniture'} alt="card navigate ui" />
        {/* Card Heading */}
        <div className="space-y-2">
            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">Stylish chair</h2>
        {/* rating  */}
          
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
            <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">${item.price}</h2>
        
        </div>
      </div>
                }
                )
              }
        </div>
    );
};

export default TopProduct;