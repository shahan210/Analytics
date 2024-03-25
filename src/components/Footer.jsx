import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#000300] text-white max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
      <div>
        <h1 className=" my-4 w-full text-3xl font-bold text-[#00df9a]">
          REACT.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare
            className="cursor-pointer hover:scale-105 duration-100"
            size={30}
          />
          <FaInstagramSquare
            className="cursor-pointer hover:scale-105 duration-100"
            size={30}
          />
          <FaTwitterSquare
            className="cursor-pointer hover:scale-105 duration-100"
            size={30}
          />
          <FaGithubSquare
            className="cursor-pointer hover:scale-105 duration-100"
            size={30}
          />
          <FaDribbbleSquare
            className="cursor-pointer hover:scale-105 duration-100"
            size={30}
          />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Marketing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Pricing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Guides
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Blogs
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Press
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:underline">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
