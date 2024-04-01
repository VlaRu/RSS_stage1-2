import RenderPageElements from '../../../templates/pageElemTemplate';
import { raceLineContainer } from './paginationButton';

export default class RaceContainer extends RenderPageElements {
  async render(): Promise<HTMLElement> {
    this.container.appendChild(await raceLineContainer);
    console.log(this.container);
    
    return this.container;
  }
}
