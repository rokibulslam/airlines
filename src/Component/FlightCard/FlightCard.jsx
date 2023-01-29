import React from "react";
import { FaPlane } from "react-icons/fa";
import { RiLuggageCartFill } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import {AiOutlineArrowRight} from "react-icons/ai"
const FlightCard = () => {
  return (
    <div className="custom-shadow-sm w-full pb-3">
      <p className="text-purple-800 font-bold px-2 text-start pb-2">
        US-Bangla Airlines |
        <span className="tex  text-sm text-black font-light">BS 145</span>{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-7  px-2 gap-x-5 gap-y-5">
        {/* <div className="flex flex-col lg:flex-row md:flex-row justify-between p-3 gap-y-5 md:gap-x-5"> */}
        {/* FROM TO  */}
        <div className="flex justify-between gap-x-2 lg:col-span-3 md:col-span-3">
          {/* From  */}
          <div>
            <p className="font-bold">DAC - 11:15</p>
            <p className="">Dhaka, BD</p>
            <p className="text-gray-500 text-sm">Sun Jan 2023</p>
          </div>
          {/* {Duration} */}
          <div className="text-center">
            <p className="text-sm">1H 5Min</p>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-slate-500 rounded-full"></div>
              <div className="h-[2px] w-24 bg-slate-500"></div>
              <p className="text-2xl text-purple-800">
                <FaPlane />
              </p>
              <div className="h-3 w-3 bg-slate-500 rounded-full"></div>
            </div>
            <p>
              <span className="text-black text-sm text-center">Non Stops</span>
            </p>
          </div>
          {/* To  */}
          <div className="font-bold lg:text-start text-end">
            <p>DAC - 11:15</p>
            <p className="">Dhaka, BD</p>
            <p className="text-gray-500 text-sm">Sun Jan 2023</p>
          </div>
        </div>
        {/* OTHERS  */}
        <div className="flex justify-between gap-x-2 lg:col-span-3 md:col-span-3">
          {/* Econnomy */}
          <div>
            <p>Economy</p>
            <div className="flex items-center">
              <p className="text-xl text-purple-800">
                <RiLuggageCartFill />
              </p>
              <p className="">20 Kg</p>
            </div>
          </div>
          {/* Refund */}
          <div>
            <p className="">Refundable</p>
            <div className="flex items-center">
              <p className="text-xl text-purple-800">
                <MdOutlineAirlineSeatReclineNormal />
              </p>
              <p className="text-sm">1 Seat</p>
            </div>
          </div>
          {/* agent */}
          <div className="lg:text-start text-end">
            <p className="font-bold ">Customer Fare 10,133</p>
            <p className="text-purple-800 text-sm">Client Fare 11,535</p>
            <p className="text-purple-800 text-sm">Commission 11,535</p>
          </div>
        </div>
        {/* Button  */}
        <div
          className=" lg:col-span-1 md:col-span-1 flex justify-between items-center 
        lg:justify-center lg:items-end lg:space-y-3 lg:flex-col md:flex-col bg-gray-400  rounded-r-md md:bg-inherit lg:bg-inherit"
        >
          <p className="font-bold text-sm text-black px-2">Flight Details</p>
          <div className="flex items-center gap-x-2 px-3 py-1 rounded-md bg-purple-800 text-gray-100 hover:bg-red-600 ease-in duration-300 hover:shadow-lg">
            <button>Book Now</button>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
