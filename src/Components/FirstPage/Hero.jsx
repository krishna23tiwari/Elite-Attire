import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 px-4 py-6 md:px-10 md:py-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 items-start gap-4'>
        <div className='flex justify-center'>
          <img
            src='https://images.unsplash.com/photo-1513094735237-8f2714d57c13'
            className='object-cover h-[240px] md:h-[360px] md:w[260px] rounded-t-lg md:-ml-[30px]'
            alt="Product Left"
          />
        </div>

        <div className='w-full md:w-[700px] h-auto md:h-40 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 mt-6 md:mt-[200px] md:-ml-[155px] flex flex-col justify-center items-center text-white shadow-lg p-4 md:p-6'>
          <h1 className="text-xl md:text-2xl font-bold font-playfair text-center">Elevate Your Style, Define Your Look</h1>
          <p className="text-sm md:text-xl mt-2 w-full md:w-3/4 text-center font-CorMorant">
            "Discover the latest trends in fashion, designed for comfort and confidence."
          </p>
        </div>

        <div className='flex justify-center md:ml-[150px] mt-6 md:mt-50'>
          <img
            src='https://images.unsplash.com/photo-1494028698538-2cd52a400b17'
            className='h-[240px] md:h-[380px] rounded-b-lg'
            alt="Product Right"
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-10 text-white'>
        <div className='bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-500 p-4 rounded-lg shadow-md text-center'>
          <h2 className='text-lg md:text-2xl font-semibold font-playfair'>Stay Ahead of the Trends</h2>
          <p className='text-xs md:text-sm mt-2 font-Mont italic'>"Upgrade your wardrobe with the latest styles."</p>
        </div>

        <div className='bg-gradient-to-br from-gray-800 via-gray-600 to-gray-500 p-4 rounded-lg shadow-md text-center'>
          <h2 className='text-lg md:text-2xl font-semibold font-playfair'>Crafted for Comfort & Style</h2>
          <p className='text-xs md:text-sm mt-2 font-Mont italic'>"Designed with high-quality fabrics and expert craftsmanship."</p>
        </div>

        <div className='bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-500 p-4 rounded-lg shadow-md text-center'>
          <h2 className='text-lg md:text-2xl font-semibold font-playfair'>Shop Smart, Save More</h2>
          <p className='text-xs md:text-sm mt-2 font-Mont italic'>"Exclusive discounts and limited-time offers."</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
