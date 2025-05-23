import { toggleCrossCell, toggleCellState } from '../game/cellFilling';
import isMobileDevice from '../utils/device';
import handleRowFieldClick from '../core/solutionChecker';

export default function initializeEventHandlers() {
  document.addEventListener('click', handleRowFieldClick);

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('row-field')) {
      toggleCrossCell(event.target);
    }
  });

  document.addEventListener('touchend', (event) => {
    if (isMobileDevice() && event.target.classList.contains('row-field')) {
      toggleCellState(event.target);
    }
  });
}