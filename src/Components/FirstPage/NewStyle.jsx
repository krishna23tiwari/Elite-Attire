import React from 'react';

const products = [
  {
    id: 1,
    name: "Urban Street Hoodie",
    image: "https://images.unsplash.com/photo-1508216310976-c518daae0cdc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    description: "Stay warm and stylish with our premium cotton hoodie, perfect for any season.",
    price: 4000
  },
  {
    id: 2,
    name: "Classic Denim Jackek",
    image: "https://images.pexels.com/photos/4828117/pexels-photo-4828117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    description: "A timeless denim jacket that adds effortless cool to any outfit.",
    price: 12000
  },
  {
    id: 3,
    name: "Athleisure Joggers",
    image: "https://images.pexels.com/photos/4668929/pexels-photo-4668929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    description: "Comfort meets fashion with these sleek, stretch-fit joggers.",
    price: 3000
  },
  {
    id: 4,
    name: "Graphic Oversized Tee",
    image: "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEdyYXBoaWMlMjBPdmVyc2l6ZWQlMjBUZWV8ZW58MHx8MHx8fDA%3D",
    rating: 3,
    description: "Express yourself with this trendy oversized tee featuring bold graphics.",
    price: 6000
  },
];

const NewStyle = () => {
  return (
    <div className='w-full h-full bg-white p-6'>
      <h1 className='text-center font-playfair text-4xl text-black italic'>"Most Popular"</h1>
      <h2 className='text-center text-white text-3xl font-CorMorant italic mt-2'>"Style that turns heads – explore the latest arrivals!"</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {products.map((product) => (
          <div key={product.id}>
            <div className='bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2'>
              <img src={product.image} alt={product.name} className='w-full h-80 object-cover rounded-md' />
            </div>
            <div className='mt-4 text-center'>
              <h2 className='text-xl font-semibold text-gray-800 font-playfair italic'>{product.name}</h2>
              <p className='text-gray-800 text-sm mt-1 font-mont'>{product.description}</p>
              <p className='text-gray-800 text-sm mt-1 font-bold font-Mont'>₹{product.price}  </p>
              <div className='flex gap-x-2 justify-center mt-2'>
                <button className='border hover:border-gray-700 border-gray-200 px-2 py-1 rounded transition-colors duration-300 hover:cursor-pointer'>Xl</button>
                <button className='border hover:border-gray-700 border-gray-200 px-2 py-1 rounded transition-colors duration-300 hover:cursor-pointer'>L</button>
                <button className='border hover:border-gray-700 border-gray-200 px-2 py-1 rounded transition-colors duration-300 hover:cursor-pointer'>M</button>
                <button className='border hover:border-gray-700 border-gray-200 px-2 py-1 rounded transition-colors duration-300 hover:cursor-pointer'>S</button>
                <button className='border hover:border-gray-700 border-gray-200 px-2 py-1 rounded transition-colors duration-300 hover:cursor-pointer'>XS</button>
              
              </div>
              <p className='text-yellow-500 text-lg mt-2'>{'★'.repeat(Math.floor(product.rating))}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewStyle;
