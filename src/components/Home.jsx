import React from "react";
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <div className="text-white flex justify-center">
      <div className=" md:max-w-[800px] sm:max-w-[630px] max-w-[330px] mt-[-96px] w-full h-screen flex-col flex justify-center items-center">
        <p className="text-[#00df9a] p-2 uppercase font-bold">
          Growing with Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ease-in-out duration-200">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold ease-in-out duration-200 py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold ease-in-out duration-200  pl-3 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl text-gray-500 pt-2 text-center">
          Monitor your data analytics to increase for BTB, BTC & SASS platforms.
        </p>
        <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};
