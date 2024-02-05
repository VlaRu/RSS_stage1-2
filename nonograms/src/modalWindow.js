function createModal(parent) {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';
  parent.appendChild(modalContainer);

  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window';
  modalContainer.appendChild(modalWindow);

  const closeModalButton = document.createElement('p');
  closeModalButton.innerText = '+';
  closeModalButton.className = 'close-modal';
  modalWindow.appendChild(closeModalButton);
  const modalWindowText = document.createElement("h2");
  modalWindowText.classList.add("modal-window__message");
  modalWindowText.innerText = 'Congratulations!!!!';
  const winGameTime = document.createElement("h3");
  winGameTime.className = 'win-game-time';
  modalWindow.appendChild(modalWindowText);
  modalWindow.appendChild(winGameTime);

  const buttonNextGame = document.createElement("button");
  buttonNextGame.classList.add('button', 'button_next-game');
  buttonNextGame.textContent = "next game";
  modalWindow.appendChild(buttonNextGame);
}

export { createModal } ;