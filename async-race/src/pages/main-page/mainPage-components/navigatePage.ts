import '../mainPage.css';
import ButtonTemplate from '../../../templates/buttonTemplate';
import RenderPageElements from '../../../templates/pageElemTemplate';
import { PageIds } from '../../../router/router';

const buttonsNavigate = [
  {
    id: PageIds.MainPageId,
    text: 'to Garage',
  },
  {
    id: PageIds.WinnersPageId,
    text: 'to Winners',
  },
];

export default class NavigatePage extends RenderPageElements {
  constructor() {
    super('div', 'navigate-page_container');
    this.addButtons();
  }

  addButtons() {
    buttonsNavigate.forEach((buttonData) => {
      const button = new ButtonTemplate('button', buttonData.text, 'to-garage_btn', () => {
        window.location.hash = buttonData.id;
      });

      const buttonElement = button.createButton();
      this.container.appendChild(buttonElement);
    });
  }

  render(): Promise<HTMLElement> {
    return Promise.resolve(this.container);
  }
}
