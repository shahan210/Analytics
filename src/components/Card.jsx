import React from "react";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import Double from "../assets/double.png";

const Card = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-5">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem]"
            src={Single}
            alt="Individual"
          />
          <h2 className="text-2xl text-center py-8 font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">500 GB Storage</p>
            <p className="py-2  mx-8">1 Grant User </p>
            <p className="py-2  mx-8">Send upto 2 GB</p>
            <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-center">
              Start Trial
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:my-0 bg-gray-100">
          <img
            className="w-20 mx-auto  mt-[-3rem] bg-transparent"
            src={Double}
            alt="Individual"
          />
          <h2 className="text-2xl text-center py-8 font-bold">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">1 TB Storage</p>
            <p className="py-2  mx-8">3 Users Granted</p>
            <p className="py-2  mx-8">Send upto 10 GB</p>
            <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-center">
              Start Trial
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem]"
            src={Triple}
            alt="Individual"
          />
          <h2 className="text-2xl text-center py-8 font-bold">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8">5 TB Storage</p>
            <p className="py-2  mx-8">10 Users Granted </p>
            <p className="py-2  mx-8">Send upto 20 GB</p>
            <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-center">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
