function fillSolution(answ) {
  const fieldEl = document.querySelectorAll('.row-field');
  if (fieldEl.length === answ.length) {
    fieldEl.forEach((el, i) => {
      if (answ[i] === 1) {
        el.classList.add('fill-cell');
      }
    });
  } else {
    console.error('Field and answer array lengths do not match.');
  }
  console.log('fill');
}
export { fillSolution };