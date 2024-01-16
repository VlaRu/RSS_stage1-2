import { getInputLetter, getIncorrectGuessCount, handleWin } from "./generateHint.js";

function renderKeyboard(container) {
  /* const letters = "abcdefghijklmnopqrstuvwxyz"; */
  const letters = "qwertyuiopasdfghjklzxcvbnm";

  letters.split('').forEach(l => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("keyboard-letter");
    keyElement.textContent = l;
    container.appendChild(keyElement);

    if (keyElement.classList.contains("keyboard-letter")) {
      keyElement.addEventListener('click', function () {
        if (!keyElement.classList.contains('disabled')) {
          keyElement.classList.add('disabled');
          keyElement.style.backgroundColor = 'initial';

          getInputLetter(l);
          const count = getIncorrectGuessCount();
          const modalContainer = document.querySelector('.modal-container');
          const modalScore = document.querySelector('.modal-window__meesage-score');

          if (count === 6) {
            modalContainer.style.display = "flex";
            modalScore.textContent = `You lose! You've reached the maximum incorrect guesses. Attempts used 6 / 6`;
            console.log("Game over!");
          }

          document.querySelector(".incorrect-guesses span").textContent = `${count} / 6`;
        }
      });
    } else {
      keyElement.classList.add('unclickable');
    }
  });
}

export { renderKeyboard };
