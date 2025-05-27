function switchTheme() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const selectors = [
    '.container_game-tools',
    '.nav-elements-container',
    '.clues-column_container',
    '.clues-rows_container',
    'h1',
    'body',
  ];

  darkModeToggle.addEventListener('change', () => {
    document.querySelectorAll('.burger-element').forEach((el) => el.classList.toggle('dark-mode'));
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => element.classList.toggle('dark-mode'));
    });
  });
}

export default switchTheme;
