import { getInputLetter, getIncorrectGuessCount, handleWin } from "./generateHint.js";

function renderKeyboard(container) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  letters.split('').forEach(l => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("keyboard-letter");
    keyElement.textContent = l;
    container.appendChild(keyElement);

    keyElement.addEventListener('click', function () {
      getInputLetter(l);
      const count = getIncorrectGuessCount();
      const modalContainer = document.querySelector('.modal-container');
      const modalScore = document.querySelector('.modal-window__meesage-score');

      if (count === 6) {
        disableKeyboard();
        modalContainer.style.display = "flex";
        modalScore.textContent = `You lose! You've reached the maximum incorrect guesses. Attempts used 6 / 6`;
        console.log("Game over!");
      }

      document.querySelector(".incorrect-guesses span").textContent = `${count} / 6`;
    });
  });
}

export function disableKeyboard() {
  const keyboardLetters = document.querySelectorAll(".keyboard-letter");
  keyboardLetters.forEach(letter => {
    letter.classList.add('disabled');
  });
}

export { renderKeyboard };
