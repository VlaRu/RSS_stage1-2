import gameData from '../core/gameData';
import createNewElement from '../dom/builderDomElements';

function renderDropElements(parentNode) {
  for (let i = 0; i < gameData.length; i += 1) {
    const gameDataItem = gameData[i];
    createNewElement('li', 'drop-element', parentNode, `${gameDataItem.title} ${gameDataItem.gridSize[0]} x ${gameDataItem.gridSize[1]}`, { 'data-index': i });
  }
}

function renderRowClues(parentNode, indx) {
  const cluesDataCol = gameData[indx].clues.columns;
  for (let i = 0; i < cluesDataCol.length; i += 1) {
    const cluesRowsElementContainer = createNewElement('div', 'clues-rows__element-container', parentNode);
    if ([i] % 5 === 0 && i !== 0) {
      cluesRowsElementContainer.style.borderTop = '3px solid #000';
    }
    for (let j = 0; j < cluesDataCol[i].length; j += 1) {
      createNewElement('div', 'clues-rows__element', cluesRowsElementContainer, cluesDataCol[i][j]);
    }
  }
}

function renderColClues(parentNode, indx) {
  const cluesDataRow = gameData[indx].clues.rows;
  for (let i = 0; i < cluesDataRow.length; i += 1) {
    const cluesColumnElementContainer = createNewElement('div', 'clues-columns__element-container', parentNode);
    if ([i] % 5 === 0 && i !== 0) {
      cluesColumnElementContainer.style.borderLeft = '3px solid #000';
    }
    for (let j = 0; j < cluesDataRow[i].length; j += 1) {
      createNewElement('div', 'clues-columns__element', cluesColumnElementContainer, cluesDataRow[i][j]);
    }
  }
}

function renderGameField(parentNode, indx) {
  const gameFieldSize = gameData[indx].gridSize;
  for (let i = 0; i < gameFieldSize[0]; i += 1) {
    const columnField = createNewElement('div', 'column-field', parentNode);
    if ([i] % 5 === 0 && i !== 0) {
      columnField.style.borderTop = '3px solid #000';
    }
    for (let j = 0; j < gameFieldSize[1]; j += 1) {
      const rowField = createNewElement('div', 'row-field', columnField);
      if ([j] % 5 === 0 && j !== 0) {
        rowField.style.borderLeft = '3px solid #000';
      }
    }
  }
}

export {
  renderColClues, renderRowClues, renderGameField, renderDropElements,
};
