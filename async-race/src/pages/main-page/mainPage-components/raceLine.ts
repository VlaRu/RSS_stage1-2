import RenderPageElements from '../../../templates/pageElemTemplate';
import MontainCar from './montainCar';
import MontainRace from './montainRace';
import RaceTrack from './raceTrack';
import { getCars } from '../../../api/api';

export interface Car {
  name: string,
  color: string,
  id: number,
}

export default class RaceLine extends RenderPageElements {

  async render(pageNumber = 1): Promise<HTMLElement> {
    const { items: cars } = await getCars(pageNumber);

    cars.forEach((car: Car) => {
      const montainCar = new MontainCar(this.container, car.id);
      const montainRace = new MontainRace(this.container, car.id);
      const raceTrack = new RaceTrack(this.container, car.color, car.name);
      raceTrack.render();
      montainCar.render();
      montainRace.render();
    });

    return this.container;
  }
}
