function switchTheme() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container_game-tools').classList.toggle('dark-mode-bg');
  document.querySelectorAll('.clues-columns__element-container').forEach((i) => i.classList.toggle('dark-clues'));
  document.querySelectorAll('.clues-rows__element-container').forEach((i) => i.classList.toggle('dark-clues'));
  });
};

export { switchTheme };