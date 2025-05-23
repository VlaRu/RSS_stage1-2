// eslint-disable-next-line import/no-mutable-exports
let timerID = null;

function startGameTimer() {
  const counterEl = document.querySelector('.counter');
  let seconds = 0;
  timerID = setInterval(() => {
    seconds += 1;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${
      remainingSeconds < 10 ? '0' : ''
    }${remainingSeconds}`;
    counterEl.innerText = display;
  }, 1000);
}

function clearGameTimer() {
  clearInterval(timerID);
  document.querySelector('.counter').innerText = '00:00';
}

export { startGameTimer, clearGameTimer, timerID };
