import CarsList from "../../../components/templates/CarsList";
import carsData from "../../../data/carsData"

function Sport() {
    const sportCars = carsData.filter(car => car.category === "sport");
    console.log(sportCars)
  return (
    <CarsList data={sportCars}/>
  )
}

export default Sport