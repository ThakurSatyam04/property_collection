import React, { useState } from 'react';
import PropertyCard from './components/PropertyCard';
import Filter from './components/Filter';

const Property_Display = ({ properties}) => {
  const itemsPerPage = 6;
  const totalPage = Math.ceil(properties.length / itemsPerPage);
  // console.log(properties.length)
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState('');

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  
  const filteredProperties = selectedCity
  ? properties.filter((property) => property.city === selectedCity)
  : properties;
  
  const currentProperty = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);


  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProperties.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCityFilter = (city) => {
    setSelectedCity(city);
    setCurrentPage(1); 
  };

  const handleAllCity = () =>{
    window.location.reload();
  }

  return (
    <div>
      <div className='flex items-center justify-center mt-2 flex-col p-10'>
        <div className='w-10/12 flex justify-between items-center mb-4'>
          <div className=''>
            <Filter cars={properties} onCityFilter={handleCityFilter} selectedCity={selectedCity}/> 
          </div>
          <div className='pl-2 pr-2 border border-blue-700 text-blue-800 font-semibold rounded-full'>
            <button onClick={handleAllCity}>View All -></button>
          </div>
        </div>
        <div className='w-11/12 flex flex-wrap gap-10 items-center justify-center '>
            {
              currentProperty.map((car) => (
                <PropertyCard key={car.id} {...car} />
              ))
            }
        </div>
        <div className='w-10/12 flex justify-between mt-6 gap-5 items-center'>
          <div className='flex gap-2 ml-2'>
          <p>{currentPage}</p>of<p>{Math.ceil(filteredProperties.length / itemsPerPage)}</p>
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
              disabled={currentPage === Math.ceil(properties.length / itemsPerPage)}
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

export default Property_Display;

