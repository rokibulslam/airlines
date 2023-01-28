import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import plane from "../../assets/plane.png";
import bird from "../../assets/bird.png";
import FlightCard from "../../Component/FlightCard/FlightCard";
const Result = () => {
  return (
    <div className="mx-4  flex justify-center">
      <div className="space-y-2">
        <h1 className="text-lg text-blue-900 font-bold">
          {" "}
          Showing Results for
        </h1>
        <p className="text-gray-500">
          One Way flight| Adult(1) | Economy | 29 Jan 2023
        </p>
        <p className="text-blue-900 font-bold "> Airport Name</p>
        {/* Filter */}
        <div className="flex space-x-2">
          <button className="border border-red-600 px-3 py-2 rounded-md">
            13:14
          </button>
          <button className="border px-3 py-2 rounded-md bg-cyan-900 text-gray-100">
            Previous Day
          </button>
          <button
            className="border px-3 py-2 rounded-md bg-red-600
         text-gray-100"
          >
            Next Day
          </button>
          <button className="border px-3 py-2 rounded-md  bg-cyan-900 text-gray-100">
            CM%
          </button>
        </div>
        {/* Filter */}
        <div className="flex space-x-2">
          <button
            className="border px-5 py-2 bg-red-600
         text-gray-100 rounded-md shadow-lg"
          >
            Modify Search
          </button>
          <button
            className="border px-5 py-2  bg-red-600
         text-gray-100 rounded-md shadow-lg"
          >
            Filter
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">
            <BsFillArrowLeftCircleFill />
          </span>
          <div className="flex items-center justify-center custom-shadow-sm rounded-md px-8 py-1 space-x-4">
            <div>
              <img height="30px" width="40px" src={plane} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-smm ">
              <p>BG</p>
              <p>4,800</p>
            </div>
          </div>
          <div className="flex items-center justify-center custom-shadow-sm rounded-md px-8 py-1 space-x-4">
            <div>
              <img height="30px" width="40px" src={bird} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-smm ">
              <p>BG</p>
              <p>4,800</p>
            </div>
          </div>
          <span className="text-2xl">
            <BsFillArrowRightCircleFill />
          </span>
        </div>
        {/* card section  */}
        <div className="">
          <FlightCard />
        </div>
      </div>
    </div>
  );
};

export default Result;
