import React, { useState } from 'react'
import OneWay from '../../Component/Search/OneWay';

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
  }
  return (
    <div>
      <div className="space-x-2 space-y-2 mx-5 mt-5">
        <div className="text-center">
          {filter.map((item, index) => (
            <button
              onClick={() => activator(item)}
              key={index}
              className={`ring-1 px-3 py-2  font-bold hover:bg-purple-800 hover:text-white rounded-sm ease-in-out duration-300 ${
                active === item ? "bg-purple-800 text-white" : "bg-transparent"
              }`}
            >
              {item.toLocaleUpperCase()}
            </button>
          ))}
        </div>
        <div>{data}</div>
      </div>
    </div>
  );
}

export default Search