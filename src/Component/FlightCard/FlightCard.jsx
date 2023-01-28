import React from "react";
import { FaPlane } from "react-icons/fa";
import { RiLuggageCartFill } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
const FlightCard = () => {
  return (
    <div className="custom-shadow-sm">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between space-y-2 p-3">
        {/* Time  */}
        <div className="flex justify-between lg:space-x-10">
          {/* Airlines Name */}
          <div>
            <p className="text-purple-800 font-bold">US-Bangla Airlines</p>
            <p className="tex  text-sm">BS 145</p>
            <p className=" text-sm">
              1H 5Min |{" "}
              <span className="text-purple-800 text-sm">Non Stops</span>
            </p>
          </div>
          {/* Duration */}
          <div className="text-center">
            <p className="text-sm">1H 5Min</p>
            <div className="flex items-center">
              <div className="h-4 w-4 bg-slate-500 rounded-full"></div>
              <div className="h-1 w-32 bg-slate-500"></div>
              <p className="text-2xl">
                <FaPlane />
              </p>
              <div className="h-4 w-4 bg-slate-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-10">
          {/* From  */}
          <div>
            <p>DAC - 11:15</p>
            <p className=" font-bold">Dhaka, BD</p>
            <p className="text-gray-500 text-sm">Sun Jan 2023</p>
          </div>
          {/* To  */}
          <div className="text-end">
            <p>DAC - 11:15</p>
            <p className="font-bold">Dhaka, BD</p>
            <p className="text-gray-500 text-sm">Sun Jan 2023</p>
          </div>
        </div>
        {/* Airlines */}

        {/* Reservation */}

        {/* Book Now */}
        <div className="flex justify-between items-center lg:space-x-10">
          <div className="space-y-2">
            {/* Econnomy */}
            <div>
              <p>Economy</p>
              <div className="flex items-center">
                <p className="text-xl text-purple-800">
                  <RiLuggageCartFill />
                </p>
                <p className="text-sm">20 Kg</p>
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
          </div>
          <div className="text-start">
            <p className="font-bold ">Agent Fare 10,133</p>
            <p className="text-purple-800 text-sm">Client Fare 11,535</p>
            <p className="text-purple-800 text-sm">Commission 11,535</p>
          </div>
        </div>
        <div className="flex justify-between lg:items-center lg:justify-center lg:space-y-3 lg:flex-col">
          <p className="font-bold text-sm text-purple-800">Flight Details</p>
          <button className="px-3 py-2 rounded-md bg-black text-gray-100 hover:bg-red-600 ease-in duration-300 hover:shadow-lg custom-btn text-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
