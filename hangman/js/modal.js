function createModal() {
  const modalContainer =  document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window");

  const modalWindowText = document.createElement("h2");
  modalWindowText.classList.add("modal-window__message");

  const modalWindowScore = document.createElement("p");
  modalWindowScore.classList.add("modal-window__meesage-score");

  const modalButtonPlay = document.createElement("button");
  modalButtonPlay.classList.add("btn-play");
  modalButtonPlay.textContent = "play again";

  modalContainer.appendChild(modalWindow);
  modalWindow.appendChild(modalWindowText);
  modalWindow.appendChild(modalWindowScore);
  modalWindow.appendChild(modalButtonPlay);
  return modalContainer;
}

export { createModal };