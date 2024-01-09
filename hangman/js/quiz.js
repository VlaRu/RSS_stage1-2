import { renderKeyboard } from "./keyboard.js";


function createQuizContainer(){
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("quiz-container");

  const quastionContainer = document.createElement("div");
  quastionContainer.classList.add("quastion-container");

  const hintContainer = document.createElement("div");
  hintContainer.classList.add("hint-container");

  const questionText = document.createElement("h2");
  questionText.classList.add("question-text");

  const numberHintIncorrect = document.createElement("p");
  numberHintIncorrect.classList.add("incorrect-guesses");

  const numberHint = document.createElement("span");
  numberHint.classList.add("number-hint");

  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard-container");

  const keyboardContainerLetter = document.createElement("div");
  keyboardContainerLetter.classList.add("keyboard-container-letter");

  quizContainer.appendChild(quastionContainer);
  quastionContainer.appendChild(hintContainer);
  quastionContainer.appendChild(questionText);
  quastionContainer.appendChild(numberHintIncorrect);
  numberHintIncorrect.appendChild(numberHint);

  quizContainer.appendChild(keyboardContainer);
  keyboardContainer.appendChild(keyboardContainerLetter);
  renderKeyboard(keyboardContainerLetter);

  return quizContainer;
}

export  {createQuizContainer};