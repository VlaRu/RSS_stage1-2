import ButtonRenderer from '../../../templates/buttonRenderer';
import { onSelectClick, onRemoveClick } from './buttonHandler';

// Maintain
export default class MontainCar extends ButtonRenderer {
  constructor(container: HTMLElement, carId: number) {
    const buttonsMontainCar = [
      {
        text: 'Select',
        class: 'select-car',
        onClick: () => onSelectClick(carId),
      },
      {
        text: 'Remove',
        class: 'remove-car',
        onClick: () => onRemoveClick(carId),
      },
    ];

    super(container, buttonsMontainCar);
  }
}
