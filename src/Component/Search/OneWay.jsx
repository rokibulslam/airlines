import React from 'react'

const OneWay = () => {
  return (
    <div className="space-y-4 pt-10">
      <div className="custom-shadow-sm py-5 px-3">
        <p className="text-xs text-gray-500 font-bold">From</p>
        <h1 className="text-purple-800 text-xl">Dhaka</h1>
        <p className="text-xs text-gray-500 font-bold">Hazrat Shahajalal</p>
      </div>
      <div className="custom-shadow-sm py-5 px-3">
        <p className="text-xs text-gray-500 font-bold">To</p>
        <h1 className="text-purple-800 text-xl">Dhaka</h1>
        <p className="text-xs text-gray-500 font-bold">Hazrat Shahajalal</p>
      </div>
      {/* Date  */}
      <div className="flex justify-between custom-shadow-sm py-5 px-3">
        <div>
          <p className="text-xs text-gray-500 font-bold">Travel Date</p>
          <h1 className="text-purple-800 text-xl">29 Jan 23</h1>
          <p className="text-xs text-gray-500 font-bold">sunday</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-bold">Travel Date</p>
          <p className="text-xs text-purple-800 font-bold">Save Money</p>
          <p className="text-xs text-purple-800 font-bold">on return flight</p>
        </div>
      </div>
      <div className="custom-shadow-sm py-5 px-3">
        <p className="text-xs text-gray-500 font-bold">Travel Date</p>
        <h1 className="text-purple-800 text-xl">1 Traveler</h1>
        <p className="text-xs text-gray-500 font-bold">on return flight</p>
      </div>
      <button className="bg-purple-800 text-white py-5 rounded-lg text-2xl hover:bg-red-600 ease-in duration-300">
        Search
      </button>
    </div>
  );
}

export default OneWay