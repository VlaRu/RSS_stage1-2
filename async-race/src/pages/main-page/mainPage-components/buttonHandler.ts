import { deleteCar } from "../../../api/api";

const onSelectClick = (carId: number) => { console.log(carId);};

const onRemoveClick = async (carId: number) => {
  try {
    const removeCar = await deleteCar(carId);
    console.log('Car deleted:', removeCar);
  } catch (error) {
    console.error('Error delete car:', error);
  }
};

export { onSelectClick, onRemoveClick }