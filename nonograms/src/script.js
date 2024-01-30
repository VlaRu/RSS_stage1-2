import "../sass/style.scss";
import { getRandomIndex } from './randomIndex';
import nonogramData from './nonogramData';
import { handleRowFieldClick } from './fillCells';
import { showDropList } from "./showDropList";
import {
  renderColClues,
  renderRowClues,
  renderGameField,
  renderDropElements,
  clearContainer,
} from "./renderDataGame";
let index = 0;
let titleGame = nonogramData[index].title;
let answerGame = nonogramData[index].answer;

function createContainers() {
  const mainContaner = document.createElement("div");
  mainContaner.className = "main-container";

  const gameToolsContainer = document.createElement("div");
  gameToolsContainer.className = "container_game-tools";
  const heading = document.createElement("h1");
  heading.textContent = "nonogram game";
  const nameGame = document.createElement("h2");
  nameGame.textContent = `${titleGame}`;
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  const randomGameButton = document.createElement("button");
  randomGameButton.innerText = "random game";
  randomGameButton.className = "random-game_button";
  const chooseButton = document.createElement("button");
  chooseButton.innerText = "choose game";
  chooseButton.className = "choose-game_button";
  const dropDawnContainer = document.createElement("div");
  dropDawnContainer.className = "drop-down_container";
  const dropDownContent = document.createElement("ul");
  dropDownContent.className = "drop-down_content";

  const gameContainer = document.createElement("div");
  gameContainer.className = "game-container";

  const cluesColumnContainer = document.createElement("div");
  cluesColumnContainer.className = "clues-column_container";

  const gameFieldFixing = document.createElement("div");
  gameFieldFixing.className = "game-field-fixing";

  const cluesRowsContainer = document.createElement("div");
  cluesRowsContainer.className = "clues-rows_container";

  const gameFieldContainer = document.createElement("div");
  gameFieldContainer.className = "game-field_container";


  renderRowClues(cluesRowsContainer,index);
  renderColClues(cluesColumnContainer, index);
  renderGameField(gameFieldContainer, index);
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('drop-element')) {
      index = parseInt(event.target.dataset.index, 10);
      clearContainer(cluesRowsContainer);
      clearContainer(cluesColumnContainer);
      clearContainer(gameFieldContainer);
      renderRowClues(cluesRowsContainer,index);
      renderColClues(cluesColumnContainer, index);
      renderGameField(gameFieldContainer, index);
      titleGame = nonogramData[index].title;
      nameGame.textContent = `${titleGame}`;
      answerGame = nonogramData[index].answer;
      console.log(index);
    } else if (event.target.classList.contains('random-game_button')) {
      index = getRandomIndex();
      console.log(index);
      clearContainer(cluesRowsContainer);
      clearContainer(cluesColumnContainer);
      clearContainer(gameFieldContainer);
      renderRowClues(cluesRowsContainer, index);
      renderColClues(cluesColumnContainer, index);
      renderGameField(gameFieldContainer,index);
      titleGame = nonogramData[index].title;
      nameGame.textContent = `${titleGame}`;
      answerGame = nonogramData[index].answer;
    }
  });

  renderDropElements(dropDownContent);

  gameFieldFixing.appendChild(cluesRowsContainer);
  gameFieldFixing.appendChild(gameFieldContainer);
  gameContainer.appendChild(cluesColumnContainer);
  gameContainer.appendChild(gameFieldFixing);
  gameToolsContainer.appendChild(heading);
  gameToolsContainer.appendChild(nameGame);
  gameToolsContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(dropDawnContainer);
  dropDawnContainer.appendChild(chooseButton);
  dropDawnContainer.appendChild(dropDownContent);
  buttonContainer.appendChild(randomGameButton);
  mainContaner.appendChild(gameToolsContainer);
  mainContaner.appendChild(gameContainer);
  document.body.appendChild(mainContaner);
}

document.addEventListener("click", handleRowFieldClick);

document.addEventListener('DOMContentLoaded', () => {
  createContainers();
  showDropList();
});

export { answerGame };