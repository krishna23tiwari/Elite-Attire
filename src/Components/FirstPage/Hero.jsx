import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 px-10 py-10'>

      <div className='grid grid-cols-3 items-start'>
        
        <div>
          <img
            src='https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='object-cover h-[360px] rounded-t-lg -ml-[31px]'
            alt="Product Left"
          />
        </div>

        
      
        
        <div className='w-[700px] h-40 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 mt-[200px] -ml-[155px] flex flex-col justify-center items-center text-white shadow-lg p-6'>
          <h1 className="text-2xl font-bold font-playfair">Elevate Your Style, Define Your Look</h1>
          <p className="text-xl mt-2 w-3/4 text-center font-CorMorant">
          "Discover the latest trends in fashion, designed for comfort and confidence. From timeless classics to modern essentials, find the perfect outfit to express your style effortlessly."
          </p>
        </div>

    
        <div className='ml-[150px] mt-50'>
          <img
            src='https://images.unsplash.com/photo-1494028698538-2cd52a400b17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='h-[380px] rounded-b-lg'
            alt="Product Right"
          />
        </div>
      </div>

      
      <div className='grid grid-cols-3 gap-8 mt-16 text-white'>
        
        <div className='bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-500 p-6 rounded-lg shadow-md text-center'>
          <h2 className='text-2xl font-semibold font-playfair'>Stay Ahead of the Trends</h2>
          <p className='text-sm mt-2 font-Mont italic'>
          "Upgrade your wardrobe with the latest styles. From streetwear to elegant fits, find what’s trending and make a statement every day."
          </p>
        </div>

        
        <div className='bg-gradient-to-br from-gray-800 via-gray-600 to-gray-500
 p-6 rounded-lg shadow-md text-center'>
          <h2 className='text-2xl font-semibold font-playfair'>Crafted for Comfort & Style</h2>
          <p className='text-sm mt-2 font-Mont italic'>
          "Designed with high-quality fabrics and expert craftsmanship, our clothes offer the perfect balance of comfort and fashion."
          </p>
        </div>

        
        <div className='bg-gradient-to-bl from-gray-800 via-gray-600 to-gray-500 p-6 rounded-lg shadow-md text-center'>
          <h2 className='text-2xl font-semibold font-playfair'>Shop Smart, Save More</h2>
          <p className='text-sm mt-2 font-Mont italic'>
          "Exclusive discounts and limited-time offers on the hottest styles. Grab your favorites before they’re gone!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
