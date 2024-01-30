function showDropList() {
  document.querySelector('.choose-game_button').addEventListener('click', () => {
    document.querySelector('.drop-down_content').classList.toggle('show-drop-list');
  })
}

export { showDropList };