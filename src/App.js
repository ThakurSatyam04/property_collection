import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CarDisplay from './CarDisplay';
import data from './cars';
import propertyData from './data'

function App() {
  const [searchQuery,setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  

  const [properties,setProperty] = useState(propertyData);
  return (
    <>
      <Nav setFilteredCars={setFilteredCars} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <CarDisplay cars = {properties} searchQuery={searchQuery} filteredCars={filteredCars}/>
    </>
  );
}

export default App;
