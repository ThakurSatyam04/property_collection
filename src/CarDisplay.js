import React, { useState } from 'react';
import CarsCard from './components/CarsCard';
import carsData from './data';
import { AiOutlineSearch } from "react-icons/ai";

const CarDisplay = ({ cars,searchQuery,filteredCars }) => {
  
  

  const itemsPerPage = 6;
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);


  const nextPage = () => {
    if (currentPage < Math.ceil(cars.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {/* <div className='relative flex gap-5 items-center w-fit mt-5 ml-16'>
            <input
              className='w-[250px] p-2 rounded-xl' 
              type="text" 
              placeholder='Search...' 
              value={searchQuery}
              onChange={handleSearchTermChange}
            />     
            <div className='absolute right-4'>
                <AiOutlineSearch/> 
            </div>    
        </div> */}
      <div className='flex items-center justify-center mt-2 flex-col p-10 '>
        <div className='w-11/12 flex flex-wrap gap-10 items-center justify-center '>
        {searchQuery === '' ? (
          currentCars.map((car) => (
            <CarsCard key={car.id} {...car} />
          ))
        ) : (
          filteredCars.map((car) => (
            <CarsCard key={car.id} {...car} />
          ))
        )}
        </div>
        <div className='w-10/12 flex justify-between mt-6 gap-5 items-center'>
          <div className='flex gap-2 ml-2'>
            <p>{currentPage}</p>of<p>{totalPage}</p>
          </div>
          <div className='flex gap-5'>

            {
              currentPage>1 && <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className='rounded-md border px-2 py-0 border-black hover:bg-gray-900 hover:text-white'
            >
              Previous
            </button>
            }

            {
              currentPage<totalPage && <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(cars.length / itemsPerPage)}
              className='rounded-md border px-2 py-0 border-black hover:bg-gray-900 hover:text-white'
            >
              Next
            </button>
            }        
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default CarDisplay;

