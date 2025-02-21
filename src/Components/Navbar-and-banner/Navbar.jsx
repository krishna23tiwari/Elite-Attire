import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/TopRate" },
  { id: 3, name: "Kids Wear", link: "/kidsWear" },
  { id: 4, name: "Mens Wear", link: "/menswear" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trendingproducts" },
  { id: 2, name: "Best Selling", link: "/bestselling" },
  { id: 3, name: "Top Rated", link: "/TopRate" },
];

const Navbar = () => {
  return (
    <div className="w-full shadow-md bg-gray-400 fixed z-40 top-0 left-0">
      <div className="bg-gradient-to-l from-gray-800 via-gray-600 to-gray-400 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl pl-3 text-gray-700 font-Mont italic sm:text-3xl flex gap-2">
              EliteAttire
            </Link>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500"
              />
              <IoMdSearch className="text-black absolute top-2 bottom-2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-cyan-500 transition-all duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3"
            >
              <span className="text-black hidden font-bold sm:block">Order</span>
              <FaCartShopping className="text-xl text-blue-700" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-bold bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400">
        <ul className="sm:flex hidden items-center text-white gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 font-CorMorant hover:text-amber-900 duration-200">
                {data.name}
              </Link>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-[2px] py-2 font-CorMorant">
              Trending <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link to={data.link} className="inline-block w-full font-CorMorant p-2 hover:bg-gray-300">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
