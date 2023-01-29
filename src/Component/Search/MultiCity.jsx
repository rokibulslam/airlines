import React, { useState } from 'react'
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from 'react-tailwindcss-datepicker';

const MultiCity = () => {
  const [calender, setcalender] = useState(false)
  const handleCalender = () => {
    setcalender(!calender)
  }
  return (
    <div className="space-y-6 flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row md:flex-row gap-y-10 justify-center items-center   gap-x-10">
        <div className="flex space-x-10 ">
          <div className="rounded-full bg-purple-800 w-10 h-10 flex items-center justify-center text-white text-xl m-auto">
            <FaPlaneDeparture />
          </div>
          <div>
            <p className="">Departure City</p>
            <p className="text-xs ">Hazrat Shahjalal</p>
          </div>
        </div>
        <div className="flex space-x-10 ">
          <div className="rounded-full bg-purple-800 w-10 h-10 flex items-center justify-center text-white text-xl m-auto">
            <FaPlaneDeparture />
          </div>
          <div>
            <p className="">Departure City</p>
            <p className="text-xs ">Hazrat Shahjalal</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-around items-center">
        <div className="flex justify-center items-center">
          <div className="pr-5">
            <span className="z-10"></span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl">
              <FcCalendar />
            </div>
            <h1 className="text-purple-800">Travel Date</h1>
            <p className="text-xs">29 Jan 23</p>
            <p className="text-xs">[Multi City]</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-r-2 border-black h-20"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-5">
            <span className="text-4xl">
              <FcCalendar />
            </span>
          </div>
          <div>
            <h1 className="text-purple-800">Passenger</h1>
            <p className="text-xs">TRAVELLER</p>
            <p className="text-xs">[ECONOMY]</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-10 gap-y-10">
        <div className="grid grid-cols-2">
          <div className="rounded-full bg-purple-800 w-10 h-10 flex items-center justify-center text-white text-xl m-auto">
            <FaPlaneDeparture />
          </div>
          <div>
            <p className="">Departure City</p>
            <p className="text-xs ">Hazrat Shahjalal</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="rounded-full bg-purple-800 w-10 h-10 flex items-center justify-center text-white text-xl m-auto">
            <FaPlaneDeparture />
          </div>
          <div>
            <p className="">Departure City</p>
            <p className="text-xs ">Hazrat Shahjalal</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around w-full">
        <div className="">
          <div className="pr-5">
            <span className="z-10"></span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl">
              <FcCalendar />
            </div>
            <h1 className="text-purple-800">Travel Date</h1>
            <p className="text-xs">29 Jan 23</p>
            <p className="text-xs">[Multi City]</p>
          </div>
        </div>
        <div>
          <button className="bg-red-600 text-white px-3 py-1 rounded-md">
            + Add City
          </button>
        </div>
        <div className="">
          <button className='bg-red-600 text-white px-3 py-1 rounded-md'>
            - Remove City
          </button>
        </div>
      </div>
      <button className="bg-purple-800 text-white px-3 py-1 rounded-md w-full">Search</button>
    </div>
  );
}

export default MultiCity