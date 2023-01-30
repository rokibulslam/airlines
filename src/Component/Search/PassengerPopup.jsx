import React from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
const PassengerPopup = () => {
  return (
    <div className="w-[300px]">
      <div className=" space-y-5 p-3">
        <h1 className="text-purple-800">Passenger</h1>
        <div className="flex flex-col gap-y-5">
          <div className="grid grid-cols-5 gap-x-2 items-center text-xs">
            <div className="col-span-1">2</div>
            <div className="col-span-4">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p>Adult</p>
                  <p>12+ yrs</p>
                </div>

                <div className="flex items-center text-2xl text-purple-500">
                  <span className="  hover:bg-red-600 hover:text-white">
                    <AiOutlinePlusSquare />
                  </span>
                  <span className=" hover:bg-red-600 hover:text-white">
                    <AiOutlineMinusSquare />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-x-2 items-center text-xs">
            <div className="col-span-1">2</div>
            <div className="col-span-4">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p>Children</p>
                  <p>2 -Less than 12 yrs</p>
                </div>

                <div className="flex items-center text-2xl text-purple-500">
                  <span className="  hover:bg-red-600 hover:text-white">
                    <AiOutlinePlusSquare />
                  </span>
                  <span className=" hover:bg-red-600 hover:text-white">
                    <AiOutlineMinusSquare />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-x-2 items-center text-xs">
            <div className="col-span-1">2</div>
            <div className="col-span-4">
              <div className="flex justify-between ">
                <div className="space-y-1">
                  <p className="">Infant</p>
                  <p>Less than 2 yrs</p>
                </div>

                <div className="flex items-center text-2xl text-purple-500">
                  <span className="  hover:bg-red-600 hover:text-white">
                    <AiOutlinePlusSquare />
                  </span>
                  <span className=" hover:bg-red-600 hover:text-white">
                    <AiOutlineMinusSquare />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-purple-800">Cabin Class</h1>
        <div className="space-y-2">
          <div className="space-x-2">
            <input type="radio" />
            <label htmlFor="">Economic</label>
          </div>
          <div className="space-x-2">
            <input type="radio" />
            <label htmlFor="">Business</label>
          </div>
          <div className="space-x-2">
            <input type="radio" />
            <label htmlFor="">Firs Class</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerPopup