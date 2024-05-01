import React, { useEffect, useState } from "react";

const Review = ({ data }) => {
  console.log(data);


  return (
    <div>
      <div className=" ">
              <div className="md:h-[200px] h-[230px] w-[300px] md:w-[500px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
              <div className="flex flex-row justify-between ">
              <div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-slate-800 mb-3"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
               
                <p className="leading-relaxed mb-3 text-gray-500">
                  {data?.email}
                </p>
              </div>
                <div className="mb-5 flex flex-row">
                  {[...Array(Number(data.star))].map((_, i) => (
                    <img
                      key={i}
                      className="h-3"
                      src="https://i.ibb.co/qMvrKvy/images-2-removebg-preview.png"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            
                <a className="inline-flex items-center">
                  <img
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    src={data?.photoURL}
                    alt="carousel navigate ui"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {data?.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {data?.review}
                    </span>
                  </span>
                </a>

                <div className="flex-row justify-between flex">
                <p className="text-sm py-1 ">Date: {data?.date}</p>
             <p className="text-sm py-1 ">{data?.time}</p>

              </div>
              </div>
            </div>
    </div>
  );
};

export default Review;
