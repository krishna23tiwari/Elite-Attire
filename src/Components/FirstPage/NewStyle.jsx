import React from 'react';

const products = [
    {
      id: 1,
      name: "Urban Street Hoodie",
      image: "https://images.unsplash.com/photo-1508216310976-c518daae0cdc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      description: "Stay warm and stylish with our premium cotton hoodie, perfect for any season."
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      image: "https://example.com/images/denim-jacket.jpg",
      rating: 4,
      description: "A timeless denim jacket that adds effortless cool to any outfit."
    },
    {
      id: 3,
      name: "Athleisure Joggers",
      image: "https://example.com/images/joggers.jpg",
      rating: 5,
      description: "Comfort meets fashion with these sleek, stretch-fit joggers."
    },
    {
      id: 4,
      name: "Graphic Oversized Tee",
      image: "https://example.com/images/oversized-tee.jpg",
      rating: 3,
      description: "Express yourself with this trendy oversized tee featuring bold graphics."
    },
    {
      id: 5,
      name: "Chic Crop Top",
      image: "https://example.com/images/crop-top.jpg",
      rating: 4,
      description: "A stylish crop top that pairs perfectly with jeans, skirts, or shorts."
    },
    {
      id: 6,
      name: "Minimalist Cargo Pants",
      image: "https://example.com/images/cargo-pants.jpg",
      rating: 3,
      description: "Functional and stylish, these cargo pants bring utility to modern fashion."
    },
    {
      id: 7,
      name: "Premium Flannel Shirt",
      image: "https://example.com/images/flannel-shirt.jpg",
      rating: 5,
      description: "Soft and comfortable, this flannel shirt is a must-have for layering."
    },
    {
      id: 8,
      name: "Slim Fit Blazer",
      image: "https://example.com/images/blazer.jpg",
      rating: 5,
      description: "A modern slim-fit blazer that adds sophistication to any wardrobe."
    }
];

const NewStyle = () => {
  return (
    <div className='w-full h-full bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400 p-6'>
      <div className='text-center'>
        <h1 className='font-playfair text-4xl text-white font-extralight italic leading-relaxed'>
          "Most Popular"
        </h1>
      </div>

      <div className='flex text-center justify-center'>
        <h2 className='text-white text-3xl font-CorMorant italic'>"Style that turns heads – explore the latest arrivals!"</h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {products.map((product) => (
          <div key={product.id} className='bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2'>
            <img src={product.image} alt={product.name} className='w-full h-52 object-cover rounded-md' />
            
            <h2 className='text-xl font-semibold mt-3 text-gray-800'>{product.name}</h2>
            
            <p className='text-gray-600 text-sm mt-1'>{product.description}</p>
            
            <p className='text-yellow-500 text-lg mt-2'>
              {Array(Math.round(product.rating)).fill('★').join('')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewStyle;
