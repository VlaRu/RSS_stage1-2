function clearField() {
  document.querySelectorAll('.row-field').forEach((row) => {
    // eslint-disable-next-line no-param-reassign
    row.innerText = '';
    row.classList.remove('fill-cell');
  });
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export { clearField, clearContainer };
