import React, { useState } from 'react'
import MultiCity from '../../Component/Search/MultiCity';
import OneWay from '../../Component/Search/OneWay';
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
const Search = () => {
  const [active, setActive] = useState("ONE WAY");
  const filter = [
    "ONE WAY",
    "ROUND WAY",
    "MULTI CITY"
  ]
  const activator = (item) => {
    setActive(item);
  };
  let data;
  if (active==="ONE WAY") {
    data=<OneWay />
  } else if (active === "ROUND WAY") {
    data=<OneWay />
  } else if (active === "MULTI CITY") {
    data=<MultiCity />
  }
  return (
    <div>
      <div className="space-x-2 space-y-2 mx-5 mt-5">
        <div className="text-center space-x-2">
          {filter.map((item, index) => (
            <button
              onClick={() => activator(item)}
              key={index}
              className={`ring-1 px-3 py-2 text-sm hover:bg-purple-800 hover:text-white rounded-sm ease-in-out duration-300 ${
                active === item ? "bg-purple-800 text-white" : "bg-transparent"
              }`}
            >
              <div className='flex justify-center items-center'>
                <span className='pr-2'><FaPlaneDeparture/></span>
                {item.toLocaleUpperCase()}
              </div>
            </button>
          ))}
        </div>
        <div>{data}</div>
      </div>
    </div>
  );
}

export default Search