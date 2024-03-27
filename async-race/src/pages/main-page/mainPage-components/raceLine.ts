import RenderPageElements from '../../../templates/pageElemTemplate';
import MontainCar from './montainCar';
import MontainRace from './montainRace';
import RaceTrack from './raceTrack';

export default class RaceLine extends RenderPageElements {
  render() {
    const montainCar = new MontainCar(this.container, 2);
    const montainRace = new MontainRace(this.container, 2);
    const raceTrack = new RaceTrack(this.container);
    montainCar.render();
    montainRace.render();
    raceTrack.render();
    return this.container;
  }
}
