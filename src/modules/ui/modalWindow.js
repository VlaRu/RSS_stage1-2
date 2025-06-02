/* eslint-disable no-import-assign */
import createNewElement from '../dom/builderDomElements';
import gameData from '../core/gameData';

function createModal(parent, index) {
  const modalContainer = createNewElement('div', 'modal-container', parent);
  const modalWindow = createNewElement('div', 'modal-window', modalContainer);
  const isDarkMode = document.body.classList.contains('dark-mode');
  if (isDarkMode) {
    modalWindow.classList.add('dark-mode');
  }
  createNewElement('p', 'close-modal', modalWindow, '+');
  createNewElement('h2', 'modal-window__message', modalWindow, 'Congratulations!');
  createNewElement('h3', 'win-game-time', modalWindow);
  const resultContainer = createNewElement('div', 'result-container', modalWindow);
  const answer = gameData[index].answer;
  const [rows, cols] = gameData[index].gridSize;
  for (let i = 0; i < rows; i++) {
    const row = createNewElement('div', 'column-field', resultContainer);
    for (let j = 0; j < cols; j++) {
      const cell = createNewElement('div', 'row-field-result', row);
      if (answer[i * cols + j] === 1) {
        cell.classList.add('fill-cell');
      }
    }
  }
  createNewElement('button', ['button', 'button_next-game'], modalWindow, 'next game');
  const display = document.querySelector('.counter').innerText;
  document.querySelector(
    '.win-game-time',
  ).innerText = `Great! You have solved the nonogram in ${display} seconds!`;
  console.log(index);
}

export default createModal;
