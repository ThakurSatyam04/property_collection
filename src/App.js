import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Property_Display from './Property_Display';
import propertyData from './data'

function App() {
  const [properties,setProperty] = useState(propertyData);
  return (
    <>
      <Nav/>
      <Property_Display properties = {properties}/>
    </>
  );
}

export default App;
