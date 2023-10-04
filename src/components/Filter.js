import React from 'react';

const Filter = ({ cars,onCityFilter, selectedCity }) => {

  // Extract all unique cities from the 'cars' data
  const uniqueCities = [...new Set(cars.map((car) => car.city))];

  return (
    <div className='flex space-x-4 gap-y-4 py-4 justify-start text-black '>
      {uniqueCities.map((city, index) => (
        <button
          className={`text-lg px-2 py-1 rounded-full font-medium text-black bg-[#bcddeba6] hover:bg-opacity-50 border-2 transition-all duration-300
          ${selectedCity === city ? 'bg-opacity-60 border-white bg-blue-800 text-white' : 'bg-opacity-40 border-transparent'}
          `}
          key={index}
          onClick={() => onCityFilter(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default Filter;
