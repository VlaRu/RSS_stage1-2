export default class RenderPageElements {
  public container: HTMLElement;

  protected tagName: string;

  protected className: string;

  static TextObject = {};

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.tagName = tagName;
    this.className = className;
  }

  static createHeaderTitle(text: string, tag = 'h1'): HTMLElement {
    const headerTitle = document.createElement(tag);
    headerTitle.innerText = text;
    return headerTitle;
  }

  protected async createPageElement(tag: string, className?: string, text?: string, id?: string): Promise<HTMLElement> {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    } else {
      element.className = this.className;
    }
    if (text) {
      element.innerText = text;
    }
    if (id) {
      element.id = id;
    }
    this.container.appendChild(element);
    return element;
  }

  async render(): Promise<HTMLElement> {
    return this.container;
  }
}