import { deleteCar } from "../../../api/api";
import { raceContainer } from "../mainPage";

const onSelectClick = (carId: number) => { console.log(carId);};

const onRemoveClick = async (carId: number) => {
  try {
    const removeCar = await deleteCar(carId);
    raceContainer.container.innerHTML = '';
    raceContainer.render()
    console.log('Car deleted:', removeCar);
    console.log(carId);

  } catch (error) {
    console.error('Error delete car:', error);
  }
};

export { onSelectClick, onRemoveClick }