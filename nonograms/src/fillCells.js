import { answerGame } from './script';


function toggleFillCell(element) {
  if (element.classList.contains('fill-cell')) {
    element.classList.remove('fill-cell');
    element.innerText = '';
  } else {
    element.classList.add('fill-cell');
  }
}

function toggleCrossCell(element) {
  if (element.innerText === '') {
    element.innerText = 'X';
    element.classList.remove('fill-cell');
  } else {
    element.innerText = '';
  }
}

function getHintUser() {
  const rowFieldElements = document.getElementsByClassName('row-field');
  const hintUser = [];
  Array.from(rowFieldElements).forEach(el => {
    if (el.classList.contains('fill-cell')) {
      hintUser.push(1);
    } else {
      hintUser.push(0);
    }
  });
  return hintUser;
}

function compareResults(hintUser) {
  const result = [];
  for (let i = 0; i < hintUser.length; i++) {
    result.push(hintUser[i] === answerGame[i]);
  }
  return result;
}

function isTruResult(result) {
  return result.every((value) => value === true);
}

function displayGreat(result) {
  if (result) {
    document.querySelector('.modal-container').style.display = 'flex';
  }
}

function handleRowFieldClick(event) {
  if (event.target.classList.contains('row-field')) {
    toggleFillCell(event.target);
  }
  const hintUser = getHintUser();
  const result = compareResults(hintUser);
  const mutchResult = isTruResult(result);
  setTimeout(() => {
    displayGreat(mutchResult);
  }, 500);
}

export { handleRowFieldClick, toggleCrossCell };