import { createGallowsContainer } from "./gallows.js";
import { createQuizContainer } from "./quiz.js";
import { createModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", function () {
  createContainers();
});

function createContainers() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");

  const gallowsContainer = createGallowsContainer();
  //quiz container
  const quizContainer = createQuizContainer();

  //modal container
  const modalContainer =  createModal();

  mainContainer.appendChild(gallowsContainer);
  mainContainer.appendChild(quizContainer);
  mainContainer.appendChild(modalContainer);
  document.body.appendChild(mainContainer);
}


