import PageTemplate from '../core/template';

export default class GamePage extends PageTemplate {
  static TextObject = {
    MainTitle: 'Game page',
  };

  render() {
    const tittle = this.createHeaderTitle(GamePage.TextObject.MainTitle);
    this.container.append(tittle);
    return this.container;
  }
}
