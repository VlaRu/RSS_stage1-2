import getRandomIndex from '../utils/getRandom';
import gameData from './gameData';
import { clearField, clearContainer } from '../game/restoreGame';
// import createModal from '../ui/modalWindow';
import createNewElement from '../dom/builderDomElements';
import { startGameTimer, clearGameTimer, timerID } from '../game/timer';
import { fillSolution } from '../game/cellFilling';
import {playSound, toggleSound, getSoundState } from '../utils/soundPlayer';
import {
  renderColClues,
  renderRowClues,
  renderGameField,
  renderDropElements,
} from '../ui/renderFieldElements';
import soundOnIcon from '../../assets/icons/sound.svg';
import soundOffIcon from '../../assets/icons/soundOff.svg';

export let index = 0;
let titleGame = gameData[index].title;
let answerGame = gameData[index].answer;
let nameGame;
let cluesColumnContainer;
let cluesRowsContainer;
let gameFieldContainer;
let burgerContainer;
let buttonContainer;
export let mainContainer;

function renderCurrentGame(i) {
  clearContainer(cluesRowsContainer);
  clearContainer(cluesColumnContainer);
  clearContainer(gameFieldContainer);
  renderRowClues(cluesRowsContainer, i);
  renderColClues(cluesColumnContainer, i);
  renderGameField(gameFieldContainer, i);
  titleGame = gameData[i].title;
  nameGame.textContent = `${titleGame}`;
  answerGame = gameData[i].answer;
}

function createLogicGame() {
  // example: createNewElement(tag, className, parent, textContent, attributes = {})
  mainContainer = createNewElement('div', 'main-container', document.body);
  const switchWrapperContainer = createNewElement('div', 'switch-wrapper-container', mainContainer);
  const labelForInput = createNewElement('label', 'switch-wrapper', switchWrapperContainer);
  createNewElement('input', 'switch-input', labelForInput, null, {
    type: 'checkbox',
    id: 'darkModeToggle',
  });
  createNewElement('span', ['switch-slider', 'switch-round'], labelForInput);
  const gameToolsContainer = createNewElement('div', 'container_game-tools', mainContainer);
  burgerContainer = createNewElement('div', 'burger-container', gameToolsContainer);
  buttonContainer = createNewElement('div', 'nav-elements-container', gameToolsContainer);
  createNewElement('h1', null, gameToolsContainer, 'nonogram game');
  const dropDawnContainer = createNewElement('ul', ['drop-down_container', 'nav-elements'], buttonContainer);
  nameGame = createNewElement('h2', null, gameToolsContainer, `${titleGame}`);
  createNewElement('div', 'counter', gameToolsContainer, '00:00');
  const soundIconElement = createNewElement('img', 'sound-icon', gameToolsContainer, null, { src: soundOnIcon, alt: 'sound-icon' });

  soundIconElement.addEventListener('click', () => {
    const isEnabled = toggleSound();
    soundIconElement.src = isEnabled ? soundOnIcon : soundOffIcon;
    playSound('click2');
  });

  soundIconElement.src = getSoundState() ? soundOnIcon : soundOffIcon;

  const chooseButton = createNewElement('li', ['choose-game_button'], dropDawnContainer, 'choose game');
  createNewElement('button', ['random-game_button', 'nav-elements'], buttonContainer, 'random game');
  const dropDownContent = createNewElement('ul', 'drop-down_content', chooseButton);
  createNewElement('button', ['restore-game_button', 'nav-elements'], buttonContainer, 'restore');
  createNewElement('button', ['solution-game_button', 'nav-elements'], buttonContainer, 'solution');
  createNewElement('div', 'burger-element', burgerContainer);
  createNewElement('div', 'burger-element', burgerContainer);
  const gameContainer = createNewElement('div', 'game-container', mainContainer);
  cluesColumnContainer = createNewElement('div', 'clues-column_container', gameContainer);
  const gameFieldFixing = createNewElement('div', 'game-field-fixing', gameContainer);
  cluesRowsContainer = createNewElement('div', 'clues-rows_container', gameFieldFixing);
  gameFieldContainer = createNewElement('div', 'game-field_container', gameFieldFixing);

  renderDropElements(dropDownContent);
  renderCurrentGame(index);

  burgerContainer.addEventListener('click', () => {
    buttonContainer.classList.toggle('hide');
  });
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('drop-element')) {
    playSound('click2');
    index = parseInt(event.target.dataset.index, 10);
    renderCurrentGame(index);
  } else if (event.target.classList.contains('random-game_button')) {
    playSound('click2');
    index = getRandomIndex();
    renderCurrentGame(index);
  } else if (event.target.classList.contains('restore-game_button')) {
    playSound('click2');
    clearField();
  } else if (event.target.classList.contains('solution-game_button')) {
    playSound('click2');
    answerGame = gameData[index].answer;
    fillSolution(answerGame);
  } else if (event.target.classList.contains('row-field')) {
    if (!timerID) startGameTimer();
  }
});

function handleModalWindow(event) {
  if (
    event.target.classList.contains('button_next-game')
    || event.target.classList.contains('close-modal')
    || event.target.classList.contains('modal-container')
  ) {
    event.stopPropagation();
    index < gameData.length - 1 ? index += 1 : index = 0;
    clearGameTimer();
    startGameTimer();
    renderCurrentGame(index);
    document.querySelector('.modal-container').remove();
  }
}

document.addEventListener('click', (event) => {
  handleModalWindow(event);
});

export { createLogicGame, answerGame };
