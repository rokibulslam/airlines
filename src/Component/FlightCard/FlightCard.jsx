import React from 'react'
import { FaPlane } from 'react-icons/fa'
import {
  RiLuggageCartFill,
  
} from "react-icons/ri";
import {
  
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";
const FlightCard = () => {
  return (
    <div className="custom-shadow-sm w-[400px]">
      <div className="space-y-2 p-3">
        {/* Time  */}
        <div className="flex justify-between">
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
        <div className="flex justify-between">
          <div>
            <p className="text-purple-800 font-bold">US-Bangla Airlines</p>
            <p className="tex  text-sm">BS 145</p>
            <p className=" text-sm">
              1H 5Min |{" "}
              <span className="text-purple-800 text-sm">Non Stops</span>
            </p>
          </div>
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
        {/* Reservation */}
        <div className="flex justify-between">
          {/* Econnomy */}
          <div>
            <p>Economy</p>
            <div className="flex space-x-2 items-center">
              <p className="text-xl text-purple-800">
                <RiLuggageCartFill />
              </p>
              <p className="text-sm">20 Kg</p>
            </div>
          </div>
          {/* Refund */}
          <div>
            <p className="">Refundable</p>
            <div className="flex space-x-2 items-center">
              <p className="text-xl text-purple-800">
                <MdOutlineAirlineSeatReclineNormal />
              </p>
              <p className="text-sm">1 Seat</p>
            </div>
          </div>
          {/* agent */}
          <div className="text-end">
            <p className="font-bold ">Agent Fare 10,133</p>
            <p className="text-purple-800 text-sm">Client Fare 11,535</p>
            <p className="text-purple-800 text-sm">Commission 11,535</p>
          </div>
        </div>
        {/* Book Now */}
      </div>
      <div className="flex justify-around book-now items-center py-5">
        <p className="font-bold text-sm text-gray-100">Flight Details</p>
        <button className="px-3 py-2 rounded-md bg-black text-gray-100 hover:bg-red-600 ease-in duration-300 hover:shadow-lg custom-btn text-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default FlightCard