import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import useAllReviews from '../Hook/useAllReviews';

const HomeReviews = () => {
    const [allrevdata, refetch] = useAllReviews();

    const topreview=allrevdata.filter((item)=>item.star === 5);
    console.log(topreview);
    return (
        <div>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
    {
  topreview?.map(item => (
    <SwiperSlide key={item._id}>
      <div>
        <div className="h-full  p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
          <div className='flex flex-row justify-around'>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="block w-12 text-slate-800 mb-4"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <div className='flex flex-col justify-center items-center py-6'>
         <div className='flex flex-row justify-center items-center pb-2 gap-2'>
         <div className='h-8 w-8 '> 
        <img className='h-8 w-8 rounded-full' src={item?.photoURL} alt="" />
        </div>
         <p className="leading-relaxed mb-2 text-gray-500">
            {item?.name}
          </p>
         </div>

          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">
                {item?.email}
              </span>
              <span className="text-gray-500 py-3 text-sm">
                {item?.review}
              </span>
            </span>
          </a>
       
          <div className='h-8 w-44'>
            <img className='h-8  w-8' src="https://i.ibb.co/BPNnyyM/yellow-five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-illustration-vector.png" alt="" />
          </div>
         </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="block w-12 text-slate-800 mb-4"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          </div>
        
        
        </div>
      </div>
    </SwiperSlide>
  ))
}
 
      </Swiper> 
        </div>
    );
};

export default HomeReviews;