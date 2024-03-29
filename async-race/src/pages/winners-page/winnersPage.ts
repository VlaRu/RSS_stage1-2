import './winnersPage.css';
import NavigatePage from '../main-page/mainPage-components/navigatePage';

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
    this.container.append(tittlePage);
    const navigateContainer = await navigatePage.render();
    this.container.append(navigateContainer);
    return this.container;
  }
}
