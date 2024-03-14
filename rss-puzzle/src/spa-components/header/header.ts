import Component from '../core/components';
import { PageIds } from '../app/app';

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
    text: 'Game Page',
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

  render() {
    this.renderPageButtons();
    return this.container;
  }
}
