import Component from '../core/components';
import { PageIds } from '../app/app';
import LocalStorage from '../localStorage/localStorage';

const Buttons = [
  {
    id: PageIds.MainPage,
    text: 'Main Page',
  },
  {
    id: PageIds.StartPage,
    text: 'Game description',
  },
  {
    id: PageIds.StartGamePage,
    text: 'Start Game',
  },
];

export default class Header extends Component {
  renderPageButtons() {
    const pageButtons = document.createElement('div');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerHTML = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  renderLogoutButton() {
    const logoutButtonContainer = document.createElement('div');
    const logoutButton = document.createElement('button');
    logoutButton.className = 'logout-btn';
    logoutButton.innerText = 'Logout';
    logoutButton.addEventListener('click', () => {
      LocalStorage.clear();
      document.body.style.transition = 'opacity 0.5s';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.hash = PageIds.MainPage;
        document.body.style.opacity = '1';
      }, 1000);
    });
    logoutButtonContainer.appendChild(logoutButton);
    this.container.appendChild(logoutButtonContainer);
  }

  render() {
    this.renderPageButtons();
    this.renderLogoutButton();
    return this.container;
  }
}
