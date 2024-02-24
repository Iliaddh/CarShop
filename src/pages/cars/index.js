import React from 'react';
import carsData from '../../../data/carsData';
import CarsPage from '../../../components/templates/CarsPage';
import Categories from '../../../components/module/Categories';

function index() {
  return (
    <div>
      <Categories/>
      <CarsPage data={carsData}/>
    </div>
  )
}

export default index;