import React, { useState } from 'react'
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";

const OneWay = () => {
  const [modal, setModal] = useState(false);

  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <form className=''>
      <div className="gap-y-7 gap-x-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">
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
            placeholder="0"
            style={{ background: "#F5EEFD" }}
            className="outline-none"
            type="text"
          />
          <label className="text-xs" htmlFor="">
            Business
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
            placeholder="0"
            style={{ background: "#F5EEFD" }}
            className="outline-none"
            type="text"
          />
          <label className="text-xs" htmlFor="">
            Business
          </label>
        </div>
      </div>
    </form>
  );
}

export default OneWay