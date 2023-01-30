import React, { useState } from 'react'
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import PassengerPopup from './PassengerPopup';
const OneWay = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <form className="">
      <div className="gap-y-2 gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div
          style={{ background: "#F5EEFD" }}
          className="flex flex-col p-2 rounded-lg"
        >
          <label
            className="text-gray-600 text-xs flex justify-between"
            htmlFor=""
          >
            <span>Form</span>
            <span className="text-2xl text-black">
              <FaPlaneDeparture />
            </span>
          </label>

          <input
            placeholder="New York"
            style={{ background: "#F5EEFD" }}
            className="outline-none"
            type="text"
          />
          <label className="text-xs" htmlFor="">
            DAC, Hazrat Shahjalal International
          </label>
        </div>
        <div
          style={{ background: "#F5EEFD" }}
          className="flex flex-col p-2 rounded-lg"
        >
          <label
            className="text-gray-600 text-xs flex justify-between"
            htmlFor=""
          >
            <span>To</span>
            <span className="text-2xl text-black">
              <FaPlaneArrival />
            </span>
          </label>

          <input
            placeholder="New York"
            style={{ background: "#F5EEFD" }}
            className="outline-none"
            type="text"
          />
          <label className="text-xs" htmlFor="">
            DAC, Hazrat Shahjalal International
          </label>
        </div>
        <div
          style={{ background: "#F5EEFD" }}
          className="flex items-center justify-between p-2 rounded-lg "
        >
          <div className="flex flex-col justify-center">
            <label
              className="text-gray-600 text-xs flex justify-between"
              htmlFor=""
            >
              From
            </label>

            <input
              placeholder="New York"
              style={{ background: "#F5EEFD" }}
              className="relative outline-none"
              type="date"
            />
            <label className="text-xs" htmlFor="">
              Thursday
            </label>
          </div>
        </div>
        <div
          style={{ background: "#F5EEFD" }}
          className="flex flex-col p-2 rounded-lg  relative"
        >
          <label className="text-gray-600 text-xs" htmlFor="">
            Passenger, Class
          </label>

          <input
            onClick={() => handleClickOpen()}
            placeholder="0"
            style={{ background: "#F5EEFD" }}
            className="outline-none"
            type="text"
          />

          <label className="text-xs" htmlFor="">
            Business
          </label>
          {popup ? (
            <div className="">
              <div className="passenger-popup shadow-2xl">
                <div className="flex justify-end">
                  <button
                    onClick={() => closePopup()}
                    className="bg-black text-white px-2 py-1 rounded-sm right-1"
                  >
                    Close
                  </button>
                </div>
                <PassengerPopup />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button className="text-white bg-purple-800 px-5 py-2 rounded-md hover:bg-red-600 ease-in-out duration-300">
          Search
        </button>
      </div>
    </form>
  );
}

export default OneWay