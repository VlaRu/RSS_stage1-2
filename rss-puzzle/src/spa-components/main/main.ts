import PageTemplate from '../core/template';

export default class MainLoginPage extends PageTemplate {
  static TextObject = {
    MainTitle: 'Login',
  };

  render() {
    const title = this.createHeaderTitle(MainLoginPage.TextObject.MainTitle);
    this.container.append(title);
    this.container.appendChild(title);

    return this.container;
  }
}
