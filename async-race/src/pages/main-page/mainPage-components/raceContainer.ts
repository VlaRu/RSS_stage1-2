import RenderPageElements from '../../../templates/pageElemTemplate';
import RaceLine from './raceLine';

export default class RaceContainer extends RenderPageElements {
  render() {
    const raceLine = new RaceLine('div', 'race-line');
    const raceLineContainer = raceLine.render();
    this.container.appendChild(raceLineContainer);
    return this.container;
  }
}
