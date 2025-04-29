import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdWbSunny } from 'react-icons/md';
import { IoMoon } from 'react-icons/io5';

export default function Filterbar() {
  let { filterData, filterHandler, dark, themeHandler } = useContext(AppContext);

  return (
    <div className='flex justify-between items-center flex-col md:flex-row bg-white py-2 shadow-md sticky top-0 z-20 '>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 px-1">
        {filterData.map((option) => (
          <button
            key={option}
            onClick={() => filterHandler(option)}
            className="bg-blue-700 text-white text-sm font-semibold rounded-full px-2 py-2 cursor-pointer hover:bg-blue-500 hover:text-black focus:outline-none transition-colors duration-200"
          >
            #{option}
          </button>
        ))}
      </div>



      <button
        className="rounded-full px-1 focus:outline-none transition-colors duration-200"
        onClick={themeHandler}
      >
        {dark ? (
          <div className="flex justify-center items-center animate-pulse h-[50px] w-[50px] bg-gray-400 rounded-full">
            <IoMoon size={30} className='cursor-pointer text-black'/>
          </div>
        ) : (
          <div className="flex justify-center items-center animate-pulse h-[50px] w-[50px] bg-sky-500 rounded-full">
            <MdWbSunny size={30} className='cursor-pointer text-yellow-500'/>
          </div>
        )}
      </button>

      </div>
  );
}