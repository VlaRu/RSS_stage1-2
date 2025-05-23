import gameData from './gameData';

function getRandomIndex() {
  return Math.floor(Math.random() * gameData.length);
}

export default getRandomIndex;
