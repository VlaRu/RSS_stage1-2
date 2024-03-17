import LocalStorage from '../localStorage/localStorage';
import PageTemplate from '../core/template';
import { PageIds } from '../app/app';
import createButtonEngine from '../core/btnCreatedTemplate';

const descriptionText = {
  header: 'Game description',
  description:
    "RSS Puzzle is an interactive mini-game aimed at enhancing English language skills. Players assemble sentences from jumbled words, inspired by Lingualeo's Phrase Constructor training. The game integrates various levels of difficulty, hint options, and a unique puzzle-like experience with artwork.",
};
export default class GameDescription extends PageTemplate {
  static TextObject = {
    MainTitle: 'RSS Puzzle English Game',
  };

  render() {
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-game_container');

    const tittle = this.createHeaderTitle(GameDescription.TextObject.MainTitle);
    descriptionContainer.append(tittle);

    const name = LocalStorage.get('lastName') || '';
    const surname = LocalStorage.get('firstName') || '';
    const greeting = document.createElement('p');
    greeting.innerText = `Hello ${name} ${surname}`;
    descriptionContainer.append(greeting);

    const gameDescriptionHeader = document.createElement('h2');
    gameDescriptionHeader.innerText = descriptionText.header;
    descriptionContainer.appendChild(gameDescriptionHeader);

    const gameDescriptionParagraph = document.createElement('p');
    gameDescriptionParagraph.innerText = descriptionText.description;
    descriptionContainer.appendChild(gameDescriptionParagraph);

    const startGameButton = createButtonEngine('start-game_button', 'Start game', descriptionContainer);
    startGameButton.addEventListener('click', () => {
      window.location.hash = PageIds.StartGamePage;
    });

    this.container.appendChild(descriptionContainer);
    return this.container;
  }
}
