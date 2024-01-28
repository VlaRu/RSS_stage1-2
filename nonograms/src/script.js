import "../sass/style.scss";
import { handleRowFieldClick } from "./fillCells";
import {titleGame} from './randomDataGame';
import {
  renderColClues,
  renderRowClues,
  renderGameField,
} from "./renderDataGame";

function createContainers() {
  const mainContaner = document.createElement("div");
  mainContaner.className = "main-container";

  const gameToolsContainer = document.createElement("div");
  gameToolsContainer.className = "container_game-tools";
  const heading = document.createElement("h1");
  heading.textContent = "nonogram game";
  const nameGame = document.createElement("h2");
  nameGame.textContent = `${titleGame}`;
  const buttonContainer = document.createElement('div');
  const randomGameButton = document.createElement('button');
  randomGameButton.innerText = 'random game';
  randomGameButton.className = 'random-game_button';
  const chooseButton = document.createElement('button');
  chooseButton.innerText = 'choose game';
  chooseButton.className = 'choose-game_button';

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

  renderRowClues(cluesRowsContainer);
  renderColClues(cluesColumnContainer);
  renderGameField(gameFieldContainer);

  gameFieldFixing.appendChild(cluesRowsContainer);
  gameFieldFixing.appendChild(gameFieldContainer);
  gameContainer.appendChild(cluesColumnContainer);
  gameContainer.appendChild(gameFieldFixing);
  gameToolsContainer.appendChild(heading);
  gameToolsContainer.appendChild(nameGame);
  gameToolsContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(randomGameButton);
  buttonContainer.appendChild(chooseButton);
  mainContaner.appendChild(gameToolsContainer);
  mainContaner.appendChild(gameContainer);
  document.body.appendChild(mainContaner);
}

document.addEventListener('click', handleRowFieldClick);

document.addEventListener("DOMContentLoaded", () => {
  createContainers();
});