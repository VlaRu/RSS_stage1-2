import Page from '../core/template';

export default class GameDescription extends Page {
  static TextObject = {
    MainTitle: 'Game description',
  };

  render() {
    const tittle = this.createHeaderTitle(GameDescription.TextObject.MainTitle);
    this.container.append(tittle);
    return this.container;
  }
}
