import './winnersPage.css'

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

  render(){
    const tittlePage = this.createHeaderTitle('Hello to the winners page');
    this.container.append(tittlePage);
    return this.container;
  }
}