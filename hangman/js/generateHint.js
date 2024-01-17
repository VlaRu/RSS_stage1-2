import { correspondingAnswer } from "./quiz.js";

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
  modalScore.textContent = `You win! Attempts used ${incorrectGuessCount} / 6, the sicret word is: "${correspondingAnswer}"`;
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

const partBodyArrClasses = ["head-element", "body-element", "left-hand", "right-hand", "left-leg", "right-leg"];

function updateBodyPartsDisplay() {
  for (let i = 0; i < partBodyArrClasses.length; i++) {
    const className = partBodyArrClasses[i];
    const element = document.querySelector(`.${className}`);

    if (element) {
      element.style.visibility = (i < incorrectGuessCount) ? "inherit" : "hidden";
    }
  }
}

function disableKeyboard() {
  const keyboardLetters = document.querySelectorAll(".keyboard-letter");
  keyboardLetters.forEach(letter => {
    letter.classList.add('disabled');
  });

}

export function getIncorrectGuessCount() {
  return incorrectGuessCount;
}

export function resetGame() {
  incorrectGuessCount = 0;

  const guessedLetters = document.querySelectorAll('.hint-letter');
  guessedLetters.forEach(hintLetter => {
    hintLetter.classList.remove('guessed-letter');
    hintLetter.style.borderBottom = "5px solid #000";
  });

  updateBodyPartsDisplay();

  const keyboardLetters = document.querySelectorAll(".keyboard-letter");
  keyboardLetters.forEach(letter => {
    letter.classList.remove('disabled');
    letter.style.backgroundColor = "#dbdbae";
    letter.classList.add('keyboard-letter');
  });

  const modalContainer = document.querySelector('.modal-container');
  modalContainer.style.display = "none";
}