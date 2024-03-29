import RenderPageElements from '../../../templates/pageElemTemplate';
import { renderCarImage } from './carImage';

export default class RaceTrack extends RenderPageElements {
  private color: string;

  private name: string;

  constructor(container: HTMLElement, color: string, name: string) {
    super('div', 'race-track_container');
    this.container = container;
    this.color = color;
    this.name = name;
  }

  async render() {
      const carContainer = document.createElement('div');
      const nameCar = document.createElement('p');
      nameCar.innerText = this.name;
      carContainer.className = 'car-container';
      carContainer.innerHTML = renderCarImage(this.color);
      this.container.appendChild(nameCar);
      this.container.appendChild(carContainer);
      return this.container;
  }
}
