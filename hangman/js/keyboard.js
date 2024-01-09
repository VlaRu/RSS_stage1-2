function renderKeyboard(container) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  letters.split('').forEach(l => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("keyboard-letter");
    keyElement.textContent = l;
    container.appendChild(keyElement);
  });
}

export { renderKeyboard };