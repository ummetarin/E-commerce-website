import { useCallback, useEffect, useState } from "react";


const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = ['https://i.ibb.co/r06SwQ0/Eu-XYCbr-Vk-AMx622.jpg','https://i.ibb.co/r7C0PBr/d078705c172a131d88c67bd19986172d.jpg','https://i.ibb.co/Ytmtshf/9c747e2db7f8be2a4fa78949a62e5922.jpg','https://i.ibb.co/Vpsgddb/trendy-fashion-sale-flyer-design-template-5562101e0dd43610ee20fd3dee6e16cd-screen.jpg'];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
    return (
        // <div className="min-h-screen ">
        //     <img  src="https://i.ibb.co/r06SwQ0/Eu-XYCbr-Vk-AMx622.jpg" alt="" />
        // </div>
        <>
        
        <div className=" w-full pt-20 min-h-screen relative overflow-hidden">
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>
        
        </>
    );
};

export default Banner;