import React, { useState } from 'react';
import PropertyCard from './components/PropertyCard';
import Filter from './components/Filter';

const Property_Display = ({ properties }) => {
  const itemsPerPage = 6;
  const totalPage = Math.ceil(properties.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState('');

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;

  const filteredProperties = selectedCity
    ? properties.filter((property) => property.city === selectedCity)
    : properties;

  const currentProperty = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

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

  const handleAllCity = () => {
    window.location.reload();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="w-full md:w-10/12 flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <Filter cars={properties} onCityFilter={handleCityFilter} selectedCity={selectedCity} />
          </div>
          <div className="pl-2 pr-2 border border-blue-700 text-blue-800 font-semibold rounded-full">
            <button onClick={handleAllCity}>View All -&gt;</button>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-4 md:gap-10 items-center justify-center">
          {currentProperty.map((car) => (
            <PropertyCard key={car.id} {...car} />
          ))}
        </div>
        <div className="w-10/12 flex flex-col md:flex-row justify-between mt-6 items-center">
          <div className="flex justify-center md:justify-start gap-2 ml-2">
            <p>{currentPage} of {Math.ceil(filteredProperties.length / itemsPerPage)}</p>
          </div>
          <div className=" flex justify-center md:justify-end gap-2">
            {currentPage > 1 && (
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="btn"
              >
                Previous
              </button>
            )}
            {currentPage < totalPage && (
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(properties.length / itemsPerPage)}
                className="btn"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property_Display;
