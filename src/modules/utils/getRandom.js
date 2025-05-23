import gameData from '../core/gameData';

function getRandomIndex() {
  return Math.floor(Math.random() * gameData.length);
}

export default getRandomIndex;
