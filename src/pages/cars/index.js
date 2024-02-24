import React from 'react';
import carsData from '../../../data/carsData';
import CarsPage from '../../../components/templates/CarsPage';

function index() {
  return (
    <div>
      
      <CarsPage data={carsData}/>
    </div>
  )
}

export default index;