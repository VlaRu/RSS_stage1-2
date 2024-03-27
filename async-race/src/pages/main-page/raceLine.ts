import RenderPageElements from '../../templates/pageElemTemplate';
import MontainCar from './montainCar';
import MontainRace from './montainRace';
import RaceTrack from './raceTrack';

export default class RaceLine extends RenderPageElements {

  render() {
    const montainCar = new MontainCar(this.container);
    const montainRace = new MontainRace(this.container);
    const raceTrack = new RaceTrack(this.container);
    raceTrack.render();
    montainCar.render();
    montainRace.render();
    return this.container;
  }
}