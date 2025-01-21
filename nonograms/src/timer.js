function createTimer(parent) {
  const counter = document.createElement('span');
  counter.className = 'counter';
  counter.innerText = '00:00';
  parent.appendChild(counter);
}


export { createTimer };