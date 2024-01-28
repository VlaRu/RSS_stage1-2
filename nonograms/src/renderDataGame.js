import nonogramData from './nonogramData';

const cluesDataCol = nonogramData.clues.columns;
const cluesDataRow = nonogramData.clues.rows;
const gameFieldSize = nonogramData.gridSize;

function renderRowClues(perentNode) {
  for (let i = 0; i < cluesDataCol.length; i += 1) {
    const cluesRowsElementContainer = document.createElement('div');
    perentNode.appendChild(cluesRowsElementContainer);
    cluesRowsElementContainer.className = 'clues-rows__element-container';
    for (let j = 0; j < cluesDataCol[i].length; j += 1) {
      const clueRowsElement = document.createElement('div');
      cluesRowsElementContainer.appendChild(clueRowsElement);
      clueRowsElement.innerText = cluesDataCol[i][j];
      clueRowsElement.className = 'clues-rows__element';
    }
  }
}

function renderColClues(perentNode) {
  for (let i = 0; i < cluesDataRow.length; i += 1) {
    const cluesColumnElementContainer = document.createElement('div');
    perentNode.appendChild(cluesColumnElementContainer);
    cluesColumnElementContainer.className = 'clues-columns__element-container';
    for (let j = 0; j < cluesDataRow[i].length; j += 1) {
      const clueColumnElement = document.createElement('div');
      cluesColumnElementContainer.appendChild(clueColumnElement);
      clueColumnElement.innerText = cluesDataRow[i][j];
      clueColumnElement.className = 'clues-column__element';
    }
  }
}

function renderGameField(perentNode) {
  for (let i = 0; i < gameFieldSize[0]; i += 1) {
    const columnField = document.createElement('div');
    columnField.className = 'column-field';
    perentNode.appendChild(columnField);
    for (let j = 0; j < gameFieldSize[1]; j += 1) {
      const rowField = document.createElement('div');
      rowField.className = 'row-field';
      columnField.appendChild(rowField);
    }
  }
}

export { renderColClues, renderRowClues, renderGameField };