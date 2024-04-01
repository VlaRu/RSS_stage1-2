import ButtonRenderer from '../../../templates/buttonRenderer';
import { onSelectClick } from './buttonHandler';

export default class MontainRace extends ButtonRenderer {
  constructor(container: HTMLElement, carId: number) {
    const buttonsMontainRace = [
      {
        text: 'Start Race',
        class: 'start-race',
        onClick: () => onSelectClick(carId),
      },
      {
        text: 'Reset Race',
        class: 'reset-race',
        onClick: () => onSelectClick(carId),
      },
    ];

    super(container, buttonsMontainRace);
  }
}
