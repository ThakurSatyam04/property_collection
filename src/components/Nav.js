import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import Drop_down from './Drop_down.js';
import carsData from '../data.js';

const Nav = ({setFilteredCars,setSearchQuery,searchQuery}) => {
  const [isCars,setCars] = useState(carsData);

    const handleSearchTermChange = (event) => {
      const term = event.target.value;
      setSearchQuery(term);
    
      const filteredCars = isCars.filter((car) =>
        car.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(filteredCars);
     };

  return (
    <div className='flex items-center justify-center mt-4 '>
      <div className='w-11/12 shadow-md border-white border rounded-2xl p-3 flex gap-10 bg-[#d3e5ecd5]'>
      <div className='w-16 flex items-center justify-center'>
          <img className='rounded-full' src="https://www.shutterstock.com/image-vector/car-garage-premium-concept-logo-250nw-1679598139.jpg" alt="" />
        </div>
        <div className='relative flex gap-5 items-center w-fit'>
            <input
            className='w-[250px] p-1 rounded-xl' 
            type="text" 
            placeholder='Search...' 
            value={searchQuery}
            onChange={handleSearchTermChange}
            />     
            <div className='absolute right-4'>
                <AiOutlineSearch/> 
            </div>    
        </div>
        <div className='flex gap-10'>
            <Drop_down title={"Relevance"}/>
            <Drop_down title={"All brands"}/>
        </div>        

      </div>
    </div>
  )
}

export default Nav
