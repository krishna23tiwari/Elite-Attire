import React from 'react';

const data = [
  {
    name: "Men's Classic T-Shirt",
    category: "men",
    details: "100% cotton, breathable fabric, available in multiple colors.",
    price: 3999,
    image: "https://plus.unsplash.com/premium_photo-1727942419322-0f09fd3b31e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Women's Summer Dress",
    category: "women",
    details: "Floral print, lightweight, perfect for summer outings.",
    price: 2999,
    image: "https://images.pexels.com/photos/3622624/pexels-photo-3622624.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Men's Denim Jeans",
    category: "men",
    details: "Slim fit, stretchable, rugged design, available in multiple shades.",
    price: 5999,
    image: "https://images.pexels.com/photos/3889627/pexels-photo-3889627.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Women's Leather Jacket",
    category: "women",
    details: "Premium leather, comfortable fit, stylish design.",
    price: 8911,
    image: "https://images.pexels.com/photos/22856153/pexels-photo-22856153/free-photo-of-studio-shot-of-a-young-fashionable-woman.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Men's leather jacket",
    category: "men",
    details: "Lightweight, breathable mesh, cushioned sole for comfort.",
    price: 2134,
    image: "https://images.pexels.com/photos/20232810/pexels-photo-20232810/free-photo-of-young-man-in-a-brown-leather-jacket-standing-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Women's crop top",
    category: "women",
    details: "Spacious, stylish design, suitable for all occasions.",
    price: 6789,
    image: "https://images.pexels.com/photos/2768958/pexels-photo-2768958.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const NewCollection = () => {
  return (
    <div className='w-[100%] h-[100%] lg:px-32 py-32'>
      <div className="text-4xl md:text-6xl font-bold text-center font-CorMorant italic tracking-[1px] mb-8">
        Newest Product
      </div>

      {/* Grid outside map for proper layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {data.map((product, index) => (
          <div>
          <div key={index} className="border mb-4 border-white rounded-lg overflow-hidden shadow-lg hover:shadow-gray-500 p-4 hover:cursor-pointer transition-transform transform hover:-translate-y-2 scale-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-80 object-cover rounded-lg"
            /> 
          </div>
          <div>
          <h3 className="text-lg font-semibold mt-4 font-CorMorant italic">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.details}</p>
            <p className="text-lg font-bold text-gray-800">₹{product.price.toFixed(2)}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
