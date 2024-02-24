import CarsList from "../../../components/templates/CarsList";
import carsData from "../../../data/carsData"

function Suv() {
    const suvCars = carsData.filter(car => car.category === "suv");
    console.log(suvCars)
  return (
    <CarsList data={suvCars}/>
  )
}

export default Suv