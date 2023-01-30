import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

const Filter = () => {
  // const [width] = useWindowWidth()
  // console.log(width);
  return (
    <div className="px-5 pt-5 space-y-10">
      {/* filter */}
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-purple-900">FILTER</h1>
          <button className="bg-purlple-800 px-1 py-1">RESET</button>
        </div>
        <div className="w-full bg-purple-800 h-1"></div>
      </div>
      {/* Price Range */}
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-purple-900">Price Range</h1>
          <button className="bg-purlple-800 px-1 py-1">
            <IoMdArrowDropupCircle />
          </button>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-purple-800 rounded-full"></div>
          <div className="w-full bg-purple-800 h-1"></div>
          <div className="h-4 w-4 bg-purple-800 rounded-full"></div>
        </div>
        <div className="flex justify-around">
          <span className="flex items-center text-lg">
            {" "}
            <TbCurrencyTaka /> 23435
          </span>
          <span className="flex items-center text-lg">
            {" "}
            <TbCurrencyTaka /> 23435
          </span>
        </div>
      </div>
      {/* Fare Type  */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-purple-900">Fare Type</h1>
          <button className="bg-purlple-800 px-1 py-1">
            <IoMdArrowDropupCircle />
          </button>
        </div>
        <div className="space-x-2 px-2 text-purple-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Refundable</label>
        </div>
        <div className="space-x-2 px-2 text-purple-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Refundable</label>
        </div>
      </div>
      {/* Stops  */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-purple-900">Stops</h1>
          <button className="bg-purlple-800 px-1 py-1">
            <IoMdArrowDropupCircle />
          </button>
        </div>
        <div className="space-x-2 px-2 text-purple-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Non Stop</label>
        </div>
        <div className="space-x-2 px-2 text-purple-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">One Stop</label>
        </div>
        <div className="space-x-2 px-2 text-purple-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">One Plus Stop</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
