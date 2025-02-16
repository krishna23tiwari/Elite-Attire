import React from 'react'

const NewProduct = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      
      <div className="absolute inset-0 bg-center bg-cover object-cover">
        <img 
          src='https://images.pexels.com/photos/7252767/pexels-photo-7252767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-60"></div>

    
      <div className="absolute top-50 left-[800px] transform -translate-y-1/2">
        <img 
          src='https://images.pexels.com/photos/30646354/pexels-photo-30646354/free-photo-of-man-in-hat-and-sweater-sitting-on-stool.jpeg' 
          className="w-70 h-[360px] object-cover rounded-lg shadow-lg"
          alt="Overlay"
        />
      </div>

      <div className="absolute top-[430px] left-[800px] transform -translate-y-1/2">
        <h1 className='text-white text-4xl font-CorMorant italic'>Explore Our new <br></br> Collection</h1>
      </div>
      <div className="absolute top-[510px] left-[800px] transform -translate-y-1/2">
        
        <button className="md:text-[14px] text-[8px] uppercase text-white border border-white font-mont font-semibold py-2 px-10 md:py-4 md:px-11 hover:bg-white hover:text-black hover:cursor-pointer">
            View Collection
          </button>
      </div>
    </div>
  )
}

export default NewProduct
