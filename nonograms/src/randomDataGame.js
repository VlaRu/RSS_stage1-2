import nonogramData from './nonogramData';

//const randomGameButton = document.querySelector('.random-game_button');

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getRandomGame() {
  console.log('hi');
}
//randomGameButton.addEventListener('click', getRandomGame);

const indx = getRandomIndex(nonogramData.length);
const cluesDataCol = nonogramData[indx].clues.columns;
const cluesDataRow = nonogramData[indx].clues.rows;
const gameFieldSize = nonogramData[indx].gridSize;
const answerGame = nonogramData[indx].answer;
const titleGame = nonogramData[indx].title;

export { cluesDataCol, cluesDataRow, gameFieldSize, answerGame, titleGame};