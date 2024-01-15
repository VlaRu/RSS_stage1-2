import { correspondingAnswer } from "./quiz.js";
import { disableKeyboard } from "./keyboard.js";

let incorrectGuessCount = 0;

export function generateHint(container) {
  correspondingAnswer.split('').forEach(l => {
    const hintLetter = document.createElement("div");
    hintLetter.classList.add("hint-letter");
    hintLetter.textContent = l;
    container.appendChild(hintLetter);
  });
}

export function handleWin() {
  const modalContainer = document.querySelector('.modal-container');
  const modalScore = document.querySelector('.modal-window__meesage-score');
  modalContainer.style.display = "flex";
  modalScore.textContent = `You win! Attempts used ${incorrectGuessCount} / 6`;
  disableKeyboard();
  console.log("Win");
}

export function getInputLetter(letter) {
  if (correspondingAnswer.includes(letter)) {
    const guessedLetters = document.querySelectorAll('.hint-letter');
    guessedLetters.forEach(hintLetter => {
      if (hintLetter.textContent === letter) {
        hintLetter.classList.add('guessed-letter');
        hintLetter.style.borderBottom = "none";
      }
    });

    const allLettersGuessed = Array.from(guessedLetters).every(hintLetter => hintLetter.classList.contains('guessed-letter'));
    if (allLettersGuessed && incorrectGuessCount < 6) {
      handleWin();
    }
  } else {
    incorrectGuessCount++;
    updateBodyPartsDisplay();
  }
}

const partBodyArrClasses = ["head-element", "body-element", "left-leg", "right-leg", "left-hand", "right-hand"];

function updateBodyPartsDisplay() {
  for (let i = 0; i < partBodyArrClasses.length; i++) {
    const className = partBodyArrClasses[i];
    const element = document.querySelector(`.${className}`);

    if (element) {
      element.style.display = (i <= incorrectGuessCount) ? "flex" : "none";
    }
  }
}

export function getIncorrectGuessCount() {
  return incorrectGuessCount;
}
