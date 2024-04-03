import { paginationPage, raceContainer } from "../mainPage";
import { cars } from "./pagination";
import { getCars } from "../../../api/api";

export default async function resetData(): Promise<void> {
  paginationPage.container.innerHTML = '';
  raceContainer.container.innerHTML = '';
  const countCarRefreshRender = document.querySelector('.count-car_garage') as HTMLElement;
  countCarRefreshRender.textContent = `Garage: ${cars.count}`;
  paginationPage.createPaginationContainer();
  raceContainer.render()
}