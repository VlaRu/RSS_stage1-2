import './sass/style.scss';
import showDropList from './modules/showDropList';
import switchTheme from './modules/switchTheme';
import handleRowFieldClick from './modules/solutionChecker';
import { createLogicGame } from './modules/logicGame';
import {
  toggleCrossCell,
  toggleCellState,
} from './modules/cellFilling';

function isMobileDevice() {
  return (
    /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent)
    || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
  );
}

document.addEventListener('DOMContentLoaded', () => {
  createLogicGame();
  showDropList();
  switchTheme();

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
});
