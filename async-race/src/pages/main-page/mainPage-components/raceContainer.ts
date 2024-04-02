import RenderPageElements from '../../../templates/pageElemTemplate';
import MontainCar from './montainCar';
import MontainRace from './montainRace';
import { getCars } from '../../../api/api';
import { renderCarImage } from './carImage';
import { pageNumber } from './paginationButton';

export interface Car {
  name: string,
  color: string,
  id: number,
}
export default class RaceContainer extends RenderPageElements {

  innerHTML?: string;

  static render() {
    throw new Error("Method not implemented.");
  }

  async render(): Promise<HTMLElement> {
    const { items: cars } = await getCars(pageNumber.number);
    console.log(pageNumber.number);

    cars.forEach(async (car: Car) => {
      const raceLineContainer = await this.renderRaceLine(car);
      this.container.appendChild(raceLineContainer);
      const montainCar = new MontainCar(this.container, car.id);
      const montainRace = new MontainRace(this.container, car.id);
      montainCar.render();
      montainRace.render();
    });

    return this.container;
  }

  async renderRaceLine(car: Car): Promise<HTMLElement> {
    const raceLineContainer = document.createElement('div');
    raceLineContainer.className = 'race-car';
    const nameCar = await this.createPageElement('p', 'name-car', `${car.name}`);
    const imageCar = await this.createPageElement('div', 'container_img-car');
    imageCar.innerHTML = await renderCarImage(car.color);
    raceLineContainer.appendChild(nameCar);
    raceLineContainer.appendChild(imageCar);
    return raceLineContainer;
  }
}
