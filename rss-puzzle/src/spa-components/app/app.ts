import MainLoginPage from '../main/main';
import GameDescription from '../start-game/startGame';
import GamePage from '../game-page/gamePage';
import PageTemplate from '../core/template';
import Header from '../header/header';
import ErrorPage, { ErrorTypes } from '../error/error';

export const enum PageIds {
  MainPage = 'main-page',
  StartPage = 'start-page',
  StartGamePage = 'start-game-page',
}

export default class App {
  private container: HTMLElement = document.body;

  private initialPage: MainLoginPage;

  private header: Header;

  private defaultPageId: string = 'current-page';

  renderPage(idPage: string) {
    const currentPage = document.querySelector(`#${this.defaultPageId}`);
    if (currentPage) {
      currentPage.remove();
    }
    let page: PageTemplate | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainLoginPage(idPage);
    } else if (idPage === PageIds.StartPage) {
      page = new GameDescription(idPage);
    } else if (idPage === PageIds.StartGamePage) {
      page = new GamePage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = this.defaultPageId;
      this.container.append(pageHTML);
    }
  }

  enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderPage(hash);
    });
  }

  constructor() {
    this.initialPage = new MainLoginPage('main-page');
    this.header = new Header('header', 'header');
  }

  run() {
    this.container.append(this.header.render());
    this.renderPage('statistics-page');
    this.enableRouteChange();
  }
}
