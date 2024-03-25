import NavigatePage from "./navigatePage";
export default class MainPage {
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
    const tittlePage = this.createHeaderTitle('Hello to the main page of the Async-race game');
    const navigatePage = new NavigatePage();
    this.container.append(tittlePage);
    this.container.append(navigatePage.render());
    return this.container;
  }
}