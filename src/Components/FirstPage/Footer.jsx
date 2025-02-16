import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-200");
      }, index * 300);
    });
  }, []);

  return (
    <footer className="bg-gradient-to-tr from-gray-800 via-gray-600 to-gray-500 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="fade-in opacity-0">
            <h3 className="text-2xl font-bold mb-4 font-CorMorant italic">About Us</h3>
            <p className="text-gray-400 font-Mont font-extralight italic">
            "At FreshFits, we believe style is more than just clothing—it's a statement. 
            From trendy streetwear to timeless classics, we bring you curated collections that blend comfort, quality, 
            and individuality. Dress with confidence, live with style."
            </p>
          </div>

          <div className="fade-in opacity-0">
            <h3 className="text-2xl font-bold mb-4 font-CorMorant italic">Quick Links</h3>
            <ul className="space-y-2">
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Home</button></li>
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Top Rated</button></li>
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Kids Wear</button></li>
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Mens wear</button></li>
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Trending Products</button></li>
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Best Selling</button></li>
              <li><button className="hover:text-gray-400 font-Mont hover:cursor-pointer">Top Rated</button></li>
            </ul>
          </div>

          <div className="fade-in opacity-0">
            <h3 className="text-2xl font-bold mb-4 font-CorMorant italic">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <button className="text-gray-400 hover:text-blue-700 transition-colors">
                <FaLinkedin size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 fade-in opacity-0">
          <p className="text-gray-400" style={{ fontFamily: "Bebas Neue" }}>
            &copy; 2025 MySite. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
