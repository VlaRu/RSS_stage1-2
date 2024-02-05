import "../sass/style.scss";
import { getRandomIndex } from "./randomIndex";
import nonogramData from "./nonogramData";
import { handleRowFieldClick, toggleCrossCell } from "./fillCells";
import { showDropList } from "./showDropList";
import { clearField, clearContainer } from "./restoreGame";
import { fillSolution } from "./fillSolutionField";
import { switchTheme } from "./switchTheme";
import { createModal } from "./modalWindow";
import { createTimer } from "./timer";
import {
  renderColClues,
  renderRowClues,
  renderGameField,
  renderDropElements,
} from "./renderDataGame";

let index = 0;
let titleGame = nonogramData[index].title;
let answerGame = nonogramData[index].answer;
let timerID = null;

function createContainers() {
  const mainContaner = document.createElement("div");
  mainContaner.className = "main-container";

  const switchWrapperContainer = document.createElement("div");
  switchWrapperContainer.className = "switch-wrapper-container";
  const labelForInput = document.createElement("label");
  labelForInput.className = "switch-wrapper";
  const switchInput = document.createElement("input");
  switchInput.className = "switch-input";
  switchInput.setAttribute("type", "checkbox");
  switchInput.setAttribute("id", "darkModeToggle");
  const switchSlider = document.createElement("span");
  switchSlider.classList.add("switch-slider", "switch-round");

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

  const burgerContainer = document.createElement("div");
  burgerContainer.className = "burger-container";
  const burgerElement = document.createElement("div");
  const burgerElement2 = document.createElement("div");
  burgerElement.className = "burger-element";
  burgerElement2.className = "burger-element";

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

  function startGameTimer() {
    const counterEl = document.querySelector(".counter");
    let seconds = 0;
    timerID = setInterval(() => {
      seconds += 1;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const display = `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
      counterEl.innerText = display;
    }, 1000);
  }

  function stopGameTimer() {
    clearInterval(timerID);
    const display = document.querySelector(".counter").innerText;
    document.querySelector(
      ".win-game-time"
    ).innerText = `Great! You have solved the nonogram in ${display} seconds!`;
  }

  function clearGameTimer() {
    clearInterval(timerID);
    document.querySelector(".counter").innerText = "00:00";
  }

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("drop-element")) {
      index = parseInt(event.target.dataset.index, 10);
      renderGame(index);
    } else if (event.target.classList.contains("random-game_button")) {
      index = getRandomIndex();
      renderGame(index);
    } else if (event.target.classList.contains("restore-game_button")) {
      clearField();
    } else if (event.target.classList.contains("solution-game_button")) {
      answerGame = nonogramData[index].answer;
      fillSolution(answerGame);
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("row-field")) {
      if (!timerID) {
        startGameTimer();
      }
    }
  });

  function renderGame(i) {
    clearContainer(cluesRowsContainer);
    clearContainer(cluesColumnContainer);
    clearContainer(gameFieldContainer);
    renderRowClues(cluesRowsContainer, i);
    renderColClues(cluesColumnContainer, i);
    renderGameField(gameFieldContainer, i);
    titleGame = nonogramData[index].title;
    nameGame.textContent = `${titleGame}`;
    answerGame = nonogramData[index].answer;
  }

  function handleGameControlsClick(event) {
    if (
      event.target.classList.contains("button_next-game") ||
      event.target.classList.contains("close-modal") ||
      event.target.classList.contains("modal-container")
    ) {
      document.querySelector(".modal-container").style.display = "none";
      event.stopPropagation();
      if (index < nonogramData.length - 1) {
        index += 1;
      } else {
        index = 0;
      }
      stopGameTimer();
      clearGameTimer();
      startGameTimer();
      renderGame(index);
    }
  }

  document.addEventListener("click", (event) => {
    handleGameControlsClick(event);
    const display = document.querySelector(".counter").innerText;
    document.querySelector(
      ".win-game-time"
    ).innerText = `Great! You have solved the nonogram in ${display} seconds!`;
  });
  createModal(mainContaner);
  gameFieldFixing.appendChild(cluesRowsContainer);
  gameFieldFixing.appendChild(gameFieldContainer);
  gameContainer.appendChild(cluesColumnContainer);
  gameContainer.appendChild(gameFieldFixing);
  burgerContainer.appendChild(burgerElement);
  burgerContainer.appendChild(burgerElement2);
  gameToolsContainer.appendChild(burgerContainer);
  gameToolsContainer.appendChild(buttonContainer);
  renderDropElements(dropDownContent);
  buttonContainer.appendChild(dropDawnContainer);
  dropDawnContainer.appendChild(chooseButton);
  dropDawnContainer.appendChild(dropDownContent);
  buttonContainer.appendChild(randomGameButton);
  buttonContainer.appendChild(restoreButton);
  buttonContainer.appendChild(solutionButton);
  gameToolsContainer.appendChild(heading);
  gameToolsContainer.appendChild(nameGame);
  createTimer(gameToolsContainer);
  labelForInput.appendChild(switchInput);
  labelForInput.appendChild(switchSlider);
  switchWrapperContainer.appendChild(labelForInput);
  mainContaner.appendChild(switchWrapperContainer);
  mainContaner.appendChild(gameToolsContainer);
  mainContaner.appendChild(gameContainer);
  document.body.appendChild(mainContaner);
}

document.addEventListener("DOMContentLoaded", () => {
  createContainers();
  showDropList();
  switchTheme();

  const btnContainer = document.querySelector(".button-container");
  const burgerContainer = document.querySelector(".burger-container");

  burgerContainer.addEventListener("click", () => {
    btnContainer.classList.toggle("hide");
  });

  document.addEventListener("click", handleRowFieldClick);
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("row-field")) {
      toggleCrossCell(event.target);
    }
  });
});

export { answerGame };
