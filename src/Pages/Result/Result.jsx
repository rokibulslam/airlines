import React, { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import plane from "../../assets/plane.png";
import bird from "../../assets/bird.png";
import FlightCard from "../../Component/FlightCard/FlightCard";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Filter from "../../Component/Filter/Filter";
import Search from "../../Pages/Search/Search";
const Result = () => {
  const [size] = useWindowWidth()
  const [popup, setPop] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const openSearch = () => {
    setSearchPopup(!searchPopup)
  }
  const closeSearch = () => {
    setSearchPopup(false)
  }
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  console.log(size)
  return (
    <div className="relative">
      <div className="space-y-2 w-full">
        <div className="flex flex-col flex-wrap gap-y-2 lg:flex-row justify-between">
          <div>
            <h1 className="text-lg text-black font-bold">
              Showing Results for
            </h1>
            <p className="text-gray-500">
              One Way flight| Adult(1) | Economy | 29 Jan 2023
            </p>
            <p className="text-black font-bold "> Airport Name</p>
          </div>
          {/* Filter */}

          <div className="gap-x-2 space-y-2">
            <button className="border px-3 py-2 rounded-md bg-purple-800 text-gray-100 hover:bg-black ease-in duration-300 hover:shadow-lg">
              13:14
            </button>
            <button className="border px-3 py-2 rounded-md bg-purple-800 text-gray-100 hover:bg-black ease-in duration-300 hover:shadow-lg">
              Previous Day
            </button>
            <button className="border px-3 py-2 rounded-md bg-purple-800 text-gray-100 hover:bg-black ease-in duration-300 hover:shadow-lg">
              Next Day
            </button>
            <button className="border px-3 py-2 rounded-md bg-purple-800 text-gray-100 hover:bg-black ease-in duration-300 hover:shadow-lg">
              CM%
            </button>
            <button
              onClick={() => openSearch()}
              className="border px-3 py-2 rounded-md bg-purple-800 text-gray-100 hover:bg-black ease-in duration-300 hover:shadow-lg"
            >
              Modify Search
            </button>
            {size < 1022 ? (
              <button
                onClick={() => handleClickOpen()}
                className="border px-3 py-2 rounded-md bg-purple-800 text-gray-100 hover:bg-black ease-in duration-300 hover:shadow-lg"
              >
                Filter
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Filter */}

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
        <div className="flex flex-wrap lg:flex-col gap-4 pt-3 justify-center">
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
        </div>
      </div>
      {popup ? (
        <div className="w-[300px] absolute right-0 top-0 z-10 bg-purple-50 shadow-2xl">
          <div>
            <div className="flex justify-end p-2 ">
              <button
                onClick={() => closePopup()}
                className="bg-red-600 text-white px-2 py-1 rounded-sm right-1"
              >
                Close
              </button>
            </div>
            <Filter />
          </div>
        </div>
      ) : (
        ""
      )}
      {searchPopup ? (
        <div className="search-page popup-position shadow-2xl bg-purple-50">
          <div>
            <div className="flex justify-end p-2 ">
              <button
                onClick={() => closeSearch()}
                className="bg-red-600 text-white px-2 py-1 rounded-sm right-1"
              >
                Close
              </button>
            </div>
            <Search />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
