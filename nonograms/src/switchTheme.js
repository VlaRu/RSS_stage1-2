function switchTheme() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  });
};

export { switchTheme };