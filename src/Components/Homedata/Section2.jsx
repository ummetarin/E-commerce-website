import Container from './Container';


const Section2 = () => {
    return (
//         <div className="hero min-h-screen bg-base-100">
//   <div className="hero-content flex-col lg:flex-row ">
//    <div>
//    <img src="https://i.ibb.co/vYpJ9XZ/473-Wx593-H-466431051-navy-MODEL.jpg" className="w-[900px] h-[500px] rounded-lg shadow-2xl" />
//    </div>
//    <div>
//    <img src="https://i.ibb.co/2Wfd4Cb/48ab7f8d4cb32b33665ed0659af0460f-1024x1024.jpg" className="w-[900px] h-[400px] rounded-lg shadow-2xl" />
//    </div>
//    <div>
//    <img src="https://i.ibb.co/nCBLnty/473-Wx593-H-466308129-black-MODEL.jpg" className="w-[900px] h-[500px] rounded-lg shadow-2xl" />
//    </div>
    
//   </div>
// </div>
<>
<div>
            <div className='relative w-full min-h-[300px]'>
    <div className='absolute inset-0  bg-[url(https://i.ibb.co/jvgC5WM/360-F-497701195-Tp-GXhc-S0-Edbf-HTTSDCSr-F1lv6-IYluwax.jpg)] bg-cover bg-fixed bg-center'></div>
    <div className='absolute inset-0 bg-black opacity-[0.7]'></div> {/* Overlay */}
    <Container>
    <div className='flex  flex-col gap-8 md:flex-row justify-center items-center relative z-10'>
            <div>
                <img className='lg:max-w-[390px] md:max-w-[330px] max-w-[200px]' src="https://i.ibb.co/2Wfd4Cb/48ab7f8d4cb32b33665ed0659af0460f-1024x1024.jpg" alt="" />
            </div>
            <div className='flex flex-col gap-3 justify-center '>
                <h2 className='font-medium text-gray-200 lg:text-lg text-sm text-center'>Trendy Collection's</h2>
                <h1 className='text-gray-100 lg:text-5xl md:text-4xl text-3xl text-center '>HIGHEST QUALITY COLLECTION</h1>
                <p className='max-w-[430px] text-center font-medium text-gray-400 mt-2 lg:text-base text-sm'>Unleash your style potential with our curated fashion picks, where trend meets individuality for the modern fashionista.</p>
            </div>
            <div>
                <img className='lg:max-w-[390px] md:max-w-[330px] max-w-[200px]' src="https://i.ibb.co/nCBLnty/473-Wx593-H-466308129-black-MODEL.jpg" alt="" />
            </div>
        </div>
    </Container>
</div>
        </div>


</>
    );
};

export default Section2; 