import nonogramData from './nonogramData';

function getRandomIndex() {
  return Math.floor(Math.random() * nonogramData.length);
}

export { getRandomIndex };