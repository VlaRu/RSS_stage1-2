import ButtonRenderer from "../../templates/buttonRenderer";

const buttonsMontainCar = [
  {
    text: 'Select',
    class: 'select-car'
  },
  {
    text: 'Remove',
    class: 'remove-car'
  },
];

export default class MontainCar extends ButtonRenderer {
  constructor(container: HTMLElement) {
    super(container, buttonsMontainCar);
  }
}