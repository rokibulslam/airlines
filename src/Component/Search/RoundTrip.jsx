import React, { useState } from 'react'
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import PassengerPopup from './PassengerPopup';
const RoundTrip = () => {
    const [popup, setPop] = useState(false);
    const handleClickOpen = () => {
      setPop(!popup);
    };
    const closePopup = () => {
      setPop(false);
    };
  return (
    <form className="">
      <div className="gap-y-7 gap-x-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div
          style={{ background: "#F5EEFD" }}
          className="flex flex-col p-3 rounded-lg space-y-1"
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
          className="flex flex-col p-3 rounded-lg space-y-1"
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
          className="flex items-center justify-between p-3 rounded-lg space-y-1"
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
              className="outline-none"
              type="date"
            />
            <label className="text-xs" htmlFor="">
              Thursday
            </label>
          </div>
          <div className="flex flex-col justify-center">
            <label
              className="text-gray-600 text-xs flex justify-between"
              htmlFor=""
            >
              From
            </label>

            <input
              placeholder=""
              style={{ background: "#F5EEFD" }}
              className="outline-none"
              type="date"
            />
            <label className="text-xs" htmlFor="">
              Thursday
            </label>
          </div>
        </div>
        <div
          style={{ background: "#F5EEFD" }}
          className="flex flex-col p-3 rounded-lg space-y-1"
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
        </div>
        {popup ? (
          <div className="h min-h-screen absolute right-0 top-0 z-20 bg-white">
            <div>
              <div className="flex justify-end p-2 ">
                <button
                  onClick={() => closePopup()}
                  className="bg-red-600 text-white px-2 py-1 rounded-sm right-1"
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
      <div className="flex justify-center pt-10">
        <button className="text-white bg-purple-800 px-5 py-2 rounded-md hover:bg-red-600 ease-in-out duration-300">
          Search
        </button>
      </div>
    </form>
  );
}

export default RoundTrip