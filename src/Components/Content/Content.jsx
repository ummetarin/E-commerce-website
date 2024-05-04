import React from 'react';

const Content = () => {
    return (
        <div className="flex md:flex-row justify-around  px-24 py-44">
           
        <div className='w-[480px]'>
            <h1  className='text-3xl  font-bold '>Boost Sales with</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente ea necessitatibus laudantium dolore, impedit dignissimos hic, facilis itaque officiis aut
                 assumenda voluptatem praesentium eos delectus accusantium nisi perspiciatis at.
            </p>
          
             {/* avator */}
            <div className='flex flex-row gap-16 pt-5'>
        
   <div className='flex pt-1'>
    <img className='w-12 h-8 rounded-full' src="https://i.ibb.co/gZnhsVG/graphics-3.png" alt="" />
    <img className='w-8 h-8 rounded-full' src="https://i.ibb.co/gZnhsVG/graphics-3.png" alt="" />
    <img className='w-8 h-8 rounded-full' src="https://i.ibb.co/gZnhsVG/graphics-3.png" alt="" />
   </div>

<div>
   <div className='flex items-center gap-4'  >
   <h1>Get started with values</h1>
   <img className='h-8 ' src="https://i.ibb.co/Tvvvk6n/images-5-removebg-preview.png" alt="" />
   </div>
    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quisquam ipsum consequatur quaerat incidunt, aut magnam, accusantium omnis, eligendi fugiat
         mollitia officia quis. Earum minima id, iusto consequuntur obcaecati facere.</p>
</div>

            </div>
        
            <div>
                
            </div>

        </div>
        <div className='flex flex-col w-[400px]  gap-4'>
            <div className='flex flex-row items-center gap-4'>
                <img className='w-[130px] h-[150px]' src="https://i.ibb.co/gZnhsVG/graphics-3.png" alt="" />
                <img className='w-[100px] h-[100px]' src="https://i.ibb.co/gZnhsVG/graphics-3.png" alt="" />

            </div>
            <div>
                <img className='w-[200px] h-[140px]' src="https://i.ibb.co/gZnhsVG/graphics-3.png" alt="" />

            </div>

        </div>
            
        </div>
    );
};

export default Content;