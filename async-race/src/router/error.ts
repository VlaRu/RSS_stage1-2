export const enum ErrorTypes {
  Error_404 = 404,
}

export default class ErrorPage {
  private errorType: ErrorTypes | string;

  container: HTMLElement = document.createElement('div');

  static TextObject: { [prop: string]: string } = {
    '404': 'Error! The page was not found.',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    this.errorType = errorType;
  }

  createHeaderTitle(text: string): HTMLHeadingElement {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    this.container.appendChild(headerTitle);
    return headerTitle;
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    this.container.append(title);
    return this.container;
  }
}
