/* eslint-disable no-param-reassign */
import { playSound } from '../utils/soundPlayer';

function fillSolution(answer) {
  const fieldEl = document.querySelectorAll('.row-field');
  if (fieldEl.length === answer.length) {
    fieldEl.forEach((el, i) => {
      if (answer[i] === 1) {
        el.classList.add('fill-cell');
      }
    });
  } else {
    console.error('Field and answer array lengths do not match.');
  }
}

function toggleFillCell(cell) {
  playSound('click1');
  if (cell.classList.contains('fill-cell')) {
    cell.classList.remove('fill-cell');
    cell.innerText = '';
  } else {
    cell.classList.add('fill-cell');
  }
}

function toggleCrossCell(cell) {
  playSound('click1');
  if (cell.innerText === '') {
    cell.innerText = 'X';
    cell.classList.remove('fill-cell');
  } else {
    cell.innerText = '';
  }
}

function toggleCellState(cell) {
  playSound('click1');
  if (!cell.classList.contains('fill-cell') && cell.innerText === '') {
    cell.classList.add('fill-cell');
    cell.innerText = '';
  } else if (cell.classList.contains('fill-cell')) {
    cell.classList.remove('fill-cell');
    cell.innerText = 'X';
  } else if (cell.innerText === 'X') {
    cell.innerText = '';
  }
}

export {
  fillSolution, toggleFillCell, toggleCrossCell, toggleCellState,
};
