import ButtonRenderer from "../../templates/buttonRenderer";
const buttonsMontainRace = [
  {
    text: 'Start Race',
    class: 'start-race'
  },
  {
    text: 'Reset Race',
    class: 'reset-race'
  },
];

export default class MontainRace extends ButtonRenderer {
  constructor(container: HTMLElement) {
    super(container, buttonsMontainRace);
  }
}