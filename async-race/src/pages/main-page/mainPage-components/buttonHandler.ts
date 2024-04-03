import { deleteCar } from "../../../api/api";
import resetData from "./resetData";

const onSelectClick = (carId: number) => { console.log(carId);};

const onRemoveClick = async (carId: number) => {
  try {
    const removeCar = await deleteCar(carId);
    resetData()
    console.log('Car deleted:', removeCar , carId);
  } catch (error) {
    console.error('Error delete car:', error);
  }
};

export { onSelectClick, onRemoveClick }