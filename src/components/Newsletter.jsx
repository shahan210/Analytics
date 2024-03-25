import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="font-bold md:text-3xl text-xl sm:text-2xl  p-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="p-2">Sign up to your newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder=" Enter Email"
              className="rounded w-full text-black p-3 flex"
            />
            <button className=" w-[200px] bg-[#00df9a] rounded-md font-medium my-6 sm:ml-4 py-3 text-black px-6">
              Notify Me
            </button>
          </div>
          <p>
            {" "}
            We care about the protection of your data. Read our <br />
            <span className="text-[#00df9a]">Privary Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
