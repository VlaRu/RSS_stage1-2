/* eslint-disable import/no-cycle */
import { answerGame, mainContainer, index } from './logicGame';
import { toggleFillCell, toggleCellState } from '../game/cellFilling';
import createModal from '../ui/modalWindow';
import isMobileDevice from '../utils/device';

function getHintUser() {
  const rowFieldElements = document.getElementsByClassName('row-field');
  const hintUser = Array.from(rowFieldElements).map((cell) => (cell.classList.contains('fill-cell') ? 1 : 0));
  return hintUser;
}

function compareResults(hintUser) {
  return hintUser.every((value, idx) => value === answerGame[idx]);
}

function checkUserInputAndDisplayResult() {
  const hintUser = getHintUser();
  const results = compareResults(hintUser);

  setTimeout(() => {
    displayGreat(results);
  }, 500);
}

function handleRowFieldClick(event) {
  if (event.target.classList.contains('row-field')) {
    if (isMobileDevice()) {
      toggleCellState(event.target);
    } else {
      toggleFillCell(event.target);
    }
    checkUserInputAndDisplayResult();
  }
}

export default handleRowFieldClick;
