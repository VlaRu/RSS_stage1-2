import { deleteCar } from "../../../api/api";
import { raceContainer } from "../mainPage";
import { paginationPage } from "../mainPage";
import { cars } from "./pagination";

const onSelectClick = (carId: number) => { console.log(carId);};

const onRemoveClick = async (carId: number) => {
  try {
    const removeCar = await deleteCar(carId);
    paginationPage.container.innerHTML = '';
    paginationPage.createPaginationContainer();
    const countCarRefreshRender = document.querySelector('.count-car_garage') as HTMLElement;
    countCarRefreshRender.textContent = `Garage: ${cars.count}`;
    raceContainer.container.innerHTML = '';
    raceContainer.render()
    console.log('Car deleted:', removeCar , carId);

  } catch (error) {
    console.error('Error delete car:', error);
  }
};

export { onSelectClick, onRemoveClick }