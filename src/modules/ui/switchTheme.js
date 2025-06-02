function switchTheme() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const savedTheme = localStorage.getItem('dark-mode');
  const selectors = [
    '.container_game-tools',
    '.nav-elements-container',
    '.clues-column_container',
    '.clues-rows_container',
    'h1',
    'body',
  ];

  function changeThemeMode() {
    document.querySelectorAll('.burger-element').forEach((el) => el.classList.toggle('dark-mode'));
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => element.classList.toggle('dark-mode'));
    });
  }

  if (savedTheme !== null) {
    darkModeToggle.checked = savedTheme === 'true';
    if (savedTheme === 'true') {
      changeThemeMode();
    }
  }

  darkModeToggle.addEventListener('change', () => {
    const isDark = darkModeToggle.checked;
    localStorage.setItem('dark-mode', isDark);
    changeThemeMode();
  });
}

export default switchTheme;
