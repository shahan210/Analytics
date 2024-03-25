import React, { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-center px-4 mx-auto h-24 max-w-[1440px] items-center">
      <h1 className=" m-4 w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="md:flex hidden cursor-pointer">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? <MdOutlineMenuOpen size={20} /> : <IoClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] border-r bg-[#000300] border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-b-gray-600 hover:scale-105 ease-in-out duration-200">
            Home
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:scale-105 ease-in-out duration-200">
            Company
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:scale-105 ease-in-out duration-200">
            Resources
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:scale-105 ease-in-out duration-200">
            About
          </li>
          <li className="p-4 hover:scale-105 ease-in-out duration-200">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
