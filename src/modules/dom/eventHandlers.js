import { toggleCrossCell } from '../game/cellFilling';
import handleRowFieldClick from '../core/solutionChecker';

export default function initializeEventHandlers() {
  document.addEventListener('click', handleRowFieldClick);

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('row-field')) {
      toggleCrossCell(event.target);
    }
  });
}