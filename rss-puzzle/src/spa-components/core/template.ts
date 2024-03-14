export default abstract class PageTemplate {
  protected container: HTMLElement;

  static TextObject = {};

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createHeaderTitle(text: string): HTMLHeadingElement {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    this.container.appendChild(headerTitle);
    return headerTitle;
  }

  render() {
    return this.container;
  }
}
