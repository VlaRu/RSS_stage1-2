import './winnersPage.css';
import NavigatePage from '../main-page/mainPage-components/navigatePage';
import { renderWinners } from './winnersTableElements';

export default class WinnersPage {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  createHeaderTitle(text: string): HTMLHeadingElement {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    this.container.appendChild(headerTitle);
    return headerTitle;
  }

  async render() {
    const tittlePage = this.createHeaderTitle('Hello to the winners page');
    const navigatePage = new NavigatePage();
    const navigateContainer = await navigatePage.render();
    const winnersContainer = document.createElement('div');
    winnersContainer.innerHTML = renderWinners();
    this.container.append(tittlePage, navigateContainer, winnersContainer);
    return this.container;
  }
}
