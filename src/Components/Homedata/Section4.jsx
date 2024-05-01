import React from 'react';
import Container from './Container';

const Section4 = () => {
    return (
        <div>
            <div className='relative w-full min-h-[300px]'>
    <div className='absolute inset-0 opacity-80 bg-[url(https://i.ibb.co/ChkDtDc/360-F-86561234-8-HJdzg2i-Bl-Pap18-K38mbyet-Kfdw1o-Nrm.jpg)] bg-cover bg-fixed bg-center'></div>
    <div className='absolute inset-0 bg-black opacity-[0.7]'></div> {/* Overlay */}
    <Container>
    <div className='flex  flex-col gap-8 md:flex-row justify-center items-center relative z-10'>
            <div>
                <img className='lg:max-w-[390px] md:max-w-[330px] max-w-[200px]' src="https://i.ibb.co/3B9RB1D/81f-F9906-Qx-L-SY606-removebg-preview.png" alt="" />
            </div>
            <div className='flex flex-col gap-3 justify-center '>
                <h2 className='font-medium text-gray-200 lg:text-lg text-sm text-center'>Trendy Collection's</h2>
                <h1 className='text-gray-100 lg:text-5xl md:text-4xl text-3xl text-center '>HIGHEST QUALITY COLLECTION</h1>
                <p className='max-w-[430px] text-center font-medium text-gray-400 mt-2 lg:text-base text-sm'>Unleash your style potential with our curated fashion picks, where trend meets individuality for the modern fashionista.</p>
            </div>
            <div>
                <img className='lg:max-w-[390px] md:max-w-[330px] max-w-[200px]' src="https://i.ibb.co/KmBzw5B/Product-Image-11711803413-removebg-preview.png" alt="" />
            </div>
        </div>
    </Container>
</div>
        </div>
    );
};

export default Section4;