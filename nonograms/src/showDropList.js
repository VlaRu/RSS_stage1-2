function showDropList() {
  document.querySelector('.choose-game_button').addEventListener('click', () => {
    document.querySelector('.drop-down_content').classList.toggle('show-drop-list');
  })
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.drop-down_container')) {
      document.querySelector('.drop-down_content').classList.remove('show-drop-list');
    }
  });
}

export { showDropList };