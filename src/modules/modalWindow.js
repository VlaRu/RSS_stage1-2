import createNewElement from './builderDomElements';

function createModal(parent) {
  const modalContainer = createNewElement('div', 'modal-container', parent);
  const modalWindow = createNewElement('div', 'modal-window', modalContainer);
  createNewElement('p', 'close-modal', modalWindow, '+');
  createNewElement('h2', 'modal-window__message', modalWindow, 'Congratulations!!!!');
  createNewElement('h3', 'win-game-time', modalWindow);
  createNewElement('button', ['button', 'button_next-game'], modalWindow, 'next game');
  const display = document.querySelector('.counter').innerText;
  document.querySelector(
    '.win-game-time',
  ).innerText = `Great! You have solved the nonogram in ${display} seconds!`;
}

export default createModal;
