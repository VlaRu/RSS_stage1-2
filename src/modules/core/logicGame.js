import getRandomIndex from '../utils/getRandom';
import gameData from './gameData';
import { clearField, clearContainer } from '../game/restoreGame';
import createModal from '../ui/modalWindow';
import createNewElement from '../dom/builderDomElements';
import { startGameTimer, clearGameTimer, timerID } from '../game/timer';
import { fillSolution } from '../game/cellFilling';
import {
  renderColClues,
  renderRowClues,
  renderGameField,
  renderDropElements,
} from '../ui/renderFieldElements';

let index = 0;
let titleGame = gameData[index].title;
// eslint-disable-next-line import/no-mutable-exports
let answerGame = gameData[index].answer;

function createLogicGame() {
  // example: createNewElement(tag, className, parent, textContent, attributes = {})
  const mainContaner = createNewElement('div', 'main-container', document.body);
  const switchWrapperContainer = createNewElement('div', 'switch-wrapper-container', mainContaner);
  const labelForInput = createNewElement('label', 'switch-wrapper', switchWrapperContainer);
  createNewElement('input', 'switch-input', labelForInput, null, {
    type: 'checkbox',
    id: 'darkModeToggle',
  });
  createNewElement('span', ['switch-slider', 'switch-round'], labelForInput);
  const gameToolsContainer = createNewElement('div', 'container_game-tools', mainContaner);
  const burgerContainer = createNewElement('div', 'burger-container', gameToolsContainer);
  const buttonContainer = createNewElement('div', 'nav-elements-container', gameToolsContainer);
  createNewElement('div', 'counter', gameToolsContainer, '00:00');
  createNewElement('h1', null, gameToolsContainer, 'nonogram game');
  createNewElement('button', ['random-game_button', 'nav-elements'], buttonContainer, 'random game');
  const dropDawnContainer = createNewElement('div', 'drop-down_container', buttonContainer);
  const nameGame = createNewElement('h2', null, gameToolsContainer, `${titleGame}`);
  createNewElement('button', ['choose-game_button', 'nav-elements'], dropDawnContainer, 'choose game');
  const dropDownContent = createNewElement('ul', 'drop-down_content', dropDawnContainer);
  createNewElement('button', ['restore-game_button', 'nav-elements'], buttonContainer, 'restore');
  createNewElement('button', ['solution-game_button', 'nav-elements'], buttonContainer, 'solution');
  createNewElement('div', 'burger-element', burgerContainer);
  createNewElement('div', 'burger-element', burgerContainer);
  const gameContainer = createNewElement('div', 'game-container', mainContaner);
  const cluesColumnContainer = createNewElement('div', 'clues-column_container', gameContainer);
  const gameFieldFixing = createNewElement('div', 'game-field-fixing', gameContainer);
  const cluesRowsContainer = createNewElement('div', 'clues-rows_container', gameFieldFixing);
  const gameFieldContainer = createNewElement('div', 'game-field_container', gameFieldFixing);
  createModal(mainContaner);

  renderDropElements(dropDownContent);
  renderRowClues(cluesRowsContainer, index);
  renderColClues(cluesColumnContainer, index);
  renderGameField(gameFieldContainer, index);

  function renderGame(i) {
    clearContainer(cluesRowsContainer);
    clearContainer(cluesColumnContainer);
    clearContainer(gameFieldContainer);
    renderRowClues(cluesRowsContainer, i);
    renderColClues(cluesColumnContainer, i);
    renderGameField(gameFieldContainer, i);
    titleGame = gameData[index].title;
    nameGame.textContent = `${titleGame}`;
    answerGame = gameData[index].answer;
  }

  burgerContainer.addEventListener('click', () => {
    buttonContainer.classList.toggle('hide');
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('drop-element')) {
      index = parseInt(event.target.dataset.index, 10);
      renderGame(index);
    } else if (event.target.classList.contains('random-game_button')) {
      index = getRandomIndex();
      renderGame(index);
    } else if (event.target.classList.contains('restore-game_button')) {
      clearField();
    } else if (event.target.classList.contains('solution-game_button')) {
      answerGame = gameData[index].answer;
      fillSolution(answerGame);
    } else if (event.target.classList.contains('row-field')) {
      if (!timerID) startGameTimer();
    }
  });

  function handleGameControlsClick(event) {
    if (
      event.target.classList.contains('button_next-game')
      || event.target.classList.contains('close-modal')
      || event.target.classList.contains('modal-container')
    ) {
      document.querySelector('.modal-container').style.display = 'none';
      event.stopPropagation();
      // eslint-disable-next-line no-unused-expressions
      index < gameData.length - 1 ? index += 1 : index = 0;
      clearGameTimer();
      startGameTimer();
      renderGame(index);
    }
  }

  document.addEventListener('click', (event) => {
    handleGameControlsClick(event);
    const display = document.querySelector('.counter').innerText;
    document.querySelector(
      '.win-game-time',
    ).innerText = `Great! You have solved the nonogram in ${display} seconds!`;
  });
}

export { createLogicGame, answerGame };
