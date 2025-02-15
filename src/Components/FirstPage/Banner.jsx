import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/2221879/pexels-photo-2221879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Upto 50% Off on All Men's Wear",
    description:
      "Upgrade your wardrobe with the latest fashion trends. Get premium quality at unbeatable prices!",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "30% Off on Women's Wear",
    description:
      "Find the perfect outfit for any occasion. Elegant styles, trendy designs, and unbeatable comfort!",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Huge Sale - 70% Off on All Products!",
    description:
      "Don't miss out on our biggest sale of the season. Shop now and save more on your favorite items!",
  },
];

const Banner = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden h-screen w-full pt-[80px]">
      <Slider {...settings} className="h-full">
        {ImageList.map((data) => (
          <div
            key={data.id}
            className="relative h-screen flex justify-center items-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center h-[70vw]"
              style={{ backgroundImage: `url(${data.image})` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Centered Content */}
            <div className="relative z-10 text-center text-white max-w-2xl px-6">
              <div className="absolute top-12">
                <h1 className="text-6xl lg:text-7xl sm:text-2xl font-playfair font-light leading-tight">
                  {data.title}
                </h1>
                <p className="text-lg sm:text-xl font-Playwrite mt-4">{data.description}</p>
                <button
                  onClick={handleOrderPopup}
                  className="mt-6 font-CorMorant font-bold bg-gradient-to-r from-blue-600 to-purple-500 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full text-lg"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
