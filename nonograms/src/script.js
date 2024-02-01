import "../sass/style.scss";
import { getRandomIndex } from "./randomIndex";
import nonogramData from "./nonogramData";
import { handleRowFieldClick, toggleCrossCell } from "./fillCells";
import { showDropList } from "./showDropList";
import { clearField, clearContainer } from "./restoreGame";
import { fillSolution } from "./fillSolutionField";
import {
  renderColClues,
  renderRowClues,
  renderGameField,
  renderDropElements,
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
  randomGameButton.classList.add("random-game_button", "button");
  const chooseButton = document.createElement("button");
  chooseButton.innerText = "choose game";
  chooseButton.classList.add("choose-game_button", "button");
  const dropDawnContainer = document.createElement("div");
  dropDawnContainer.className = "drop-down_container";
  const dropDownContent = document.createElement("ul");
  dropDownContent.className = "drop-down_content";
  const restoreButton = document.createElement("button");
  const solutionButton = document.createElement("button");
  restoreButton.innerText = "restore";
  restoreButton.classList.add("restore-game_button", "button");
  solutionButton.innerText = "solution";
  solutionButton.classList.add("solution-game_button", "button");

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

  renderRowClues(cluesRowsContainer, index);
  renderColClues(cluesColumnContainer, index);
  renderGameField(gameFieldContainer, index);
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("drop-element")) {
      index = parseInt(event.target.dataset.index, 10);
      clearContainer(cluesRowsContainer);
      clearContainer(cluesColumnContainer);
      clearContainer(gameFieldContainer);
      renderRowClues(cluesRowsContainer, index);
      renderColClues(cluesColumnContainer, index);
      renderGameField(gameFieldContainer, index);
      titleGame = nonogramData[index].title;
      nameGame.textContent = `${titleGame}`;
      answerGame = nonogramData[index].answer;
    } else if (event.target.classList.contains("random-game_button")) {
      index = getRandomIndex();
      clearContainer(cluesRowsContainer);
      clearContainer(cluesColumnContainer);
      clearContainer(gameFieldContainer);
      renderRowClues(cluesRowsContainer, index);
      renderColClues(cluesColumnContainer, index);
      renderGameField(gameFieldContainer, index);
      titleGame = nonogramData[index].title;
      nameGame.textContent = `${titleGame}`;
      answerGame = nonogramData[index].answer;
    } else if (event.target.classList.contains("restore-game_button")) {
      clearField();
    } else if (event.target.classList.contains("solution-game_button")) {
      answerGame = nonogramData[index].answer;
      fillSolution(answerGame);
    }
  });

  renderDropElements(dropDownContent);

  gameFieldFixing.appendChild(cluesRowsContainer);
  gameFieldFixing.appendChild(gameFieldContainer);
  gameContainer.appendChild(cluesColumnContainer);
  gameContainer.appendChild(gameFieldFixing);
  gameToolsContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(dropDawnContainer);
  dropDawnContainer.appendChild(chooseButton);
  dropDawnContainer.appendChild(dropDownContent);
  buttonContainer.appendChild(randomGameButton);
  buttonContainer.appendChild(restoreButton);
  buttonContainer.appendChild(solutionButton);
  gameToolsContainer.appendChild(heading);
  gameToolsContainer.appendChild(nameGame);
  mainContaner.appendChild(gameToolsContainer);
  mainContaner.appendChild(gameContainer);
  document.body.appendChild(mainContaner);
}

document.addEventListener("click", handleRowFieldClick);
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("row-field")) {
    toggleCrossCell(event.target);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createContainers();
  showDropList();
});

export { answerGame };
