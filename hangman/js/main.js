import { createGallowsContainer } from "./gallows.js";

document.addEventListener("DOMContentLoaded", function () {
  createContainers();
});

function createContainers() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");

  const gallowsContainer = createGallowsContainer();
  //quiz container
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("quiz-container");

  //modal container
  const modalContainer =  document.createElement("div");
  modalContainer.classList.add("modal-container");

  mainContainer.appendChild(gallowsContainer);
  mainContainer.appendChild(quizContainer);
  mainContainer.appendChild(modalContainer);
  document.body.appendChild(mainContainer);
}


