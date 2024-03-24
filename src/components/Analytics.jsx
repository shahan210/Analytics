import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-3xl text-xl sm:text-2xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <button className="text-[#00df9a] bg-[#000300] ease-in-out duration-200 w-[200px] hover:bg-[#00df9a] rounded-md font-medium my-6 mx-auto py-3 hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
