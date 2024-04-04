import React from 'react';

const Review = ({data,refetch}) => {

    const handlefresh=()=>{
        refetch()
    }
    return (
        <div>
            <div>
                <button onClick={handlefresh}>Refresh Reviews</button>
            </div>
           <div className="flex flex-row items-center gap-16">
         <div className="pt-8  flex flex-row justify-start gap-5 items-center ml-12">
            <img src="https://i.ibb.co/jMwfy6J/review.jpg" className="w-[40px] rounded-lg h-[40px]" alt="" />
            <h1>{data?.name}</h1>
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
    );
};


export default Review;