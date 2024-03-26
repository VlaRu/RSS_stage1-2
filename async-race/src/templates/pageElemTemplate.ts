export default class RenderPageElements {
  protected container: HTMLElement;

  protected tagName: string;

  protected className: string;

  static TextObject = {};

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.tagName = tagName;
    this.className = className;
  }

   static createHeaderTitle(text: string): HTMLHeadingElement {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  protected createElements(tag: string, className?: string, text?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    } else {
      element.className = this.className;
    }
    if (text) {
      element.innerText = text;
    }
    this.container.appendChild(element);
    return element;
  }

  render() {
    return this.container;
  }
}