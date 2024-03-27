import RenderPageElements from '../../../templates/pageElemTemplate';
import { renderCarImage } from './carImage';

export default class RaceTrack extends RenderPageElements {
  constructor(container: HTMLElement) {
    super('div', 'race-track_container');
    this.container = container;
  }

  render() {
    const carContainer = document.createElement('div');
    carContainer.className = 'car-container';
    carContainer.innerHTML = renderCarImage('gray');

    this.container.appendChild(carContainer);

    return this.container;
  }
}
