/* eslint-disable import/no-cycle */
import { answerGame } from './logicGame';
import { toggleFillCell, toggleCellState } from '../game/cellFilling';
import isMobileDevice from '../utils/device';

function getHintUser() {
  const rowFieldElements = document.getElementsByClassName('row-field');
  const hintUser = Array.from(rowFieldElements).map((cell) => (cell.classList.contains('fill-cell') ? 1 : 0));
  return hintUser;
}

function compareResults(hintUser) {
  return hintUser.every((value, index) => value === answerGame[index]);
}

function displayGreat(isMatch) {
  const modalContainer = document.querySelector('.modal-container');
  if (isMatch) {
    modalContainer.style.display = 'flex';
  }
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
