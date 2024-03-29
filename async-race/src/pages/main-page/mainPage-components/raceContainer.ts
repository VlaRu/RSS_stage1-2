import RenderPageElements from '../../../templates/pageElemTemplate';
import RaceLine from './raceLine';

export default class RaceContainer extends RenderPageElements {
  async render(): Promise<HTMLElement> {
    const raceLine = new RaceLine('div', 'race-line');
    const raceLineContainer = await raceLine.render();
    this.container.appendChild(raceLineContainer);
    return this.container;
  }
}
