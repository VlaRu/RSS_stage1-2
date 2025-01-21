import { answerGame } from './script';


function toggleFillCell(cell) {
  if (cell.classList.contains('fill-cell')) {
    cell.classList.remove('fill-cell');
    cell.innerText = '';
  } else {
    cell.classList.add('fill-cell');
  }
}

function toggleCrossCell(cell) {
  if (cell.innerText === '') {
    cell.innerText = 'X';
    cell.classList.remove('fill-cell');
  } else {
    cell.innerText = '';
  }
}

function getHintUser() {
  const rowFieldElements = document.getElementsByClassName('row-field');
  const hintUser = Array.from(rowFieldElements).map((cell) => (cell.classList.contains('fill-cell') ? 1 : 0));
  return hintUser;
}

function compareResults(hintUser) {
  return hintUser.map((value, index) => value === answerGame[index]);
}

function areAllResultsTrue(results) {
  return results.every((value) => value === true);
}

function displayGreat(isMatch) {
  const modalContainer = document.querySelector('.modal-container');
  if (isMatch) {
    modalContainer.style.display = 'flex';
  }
}

function checkUserInputAndDisplayResult() {
  const hintUser = getHintUser();
  const results = compareResults(hintUser);
  const isMatch = areAllResultsTrue(results);

  setTimeout(() => {
    displayGreat(isMatch);
  }, 500);
}

function handleRowFieldClick(event) {
  if (event.target.classList.contains('row-field')) {
    toggleFillCell(event.target);
    checkUserInputAndDisplayResult();
  }
}

export { handleRowFieldClick, toggleCrossCell };