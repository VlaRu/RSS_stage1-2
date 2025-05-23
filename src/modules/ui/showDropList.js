function showDropList() {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.drop-down_container')) {
      document.querySelector('.drop-down_content').classList.remove('show-drop-list');
    }
    if (event.target.closest('.choose-game_button')) {
      document.querySelector('.drop-down_content').classList.toggle('show-drop-list');
    }
  });
}

export default showDropList;
