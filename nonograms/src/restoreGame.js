function clearField() {
  document.querySelectorAll('.row-field').forEach((el) => {
    el.innerText = '';
    el.classList.remove('fill-cell')
  });
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export { clearField, clearContainer };


