import MainLoginPage from '../main/main';
import GameDescription from '../start-game/startGame';
import GamePage from '../game-page/gamePage';
import PageTemplate from '../core/template';
import Header from '../header/header';
import ErrorPage, { ErrorTypes } from '../error/error';
import LocalStorage from '../localStorage/localStorage';

export const enum PageIds {
  MainPage = 'main-page',
  StartPage = 'start-page',
  StartGamePage = 'start-game-page',
}

export default class App {
  private container = document.body;

  private header: Header;

  private defaultPageId: string = 'current-page';

  constructor() {
    this.header = new Header('header', 'header');
  }

  private static isUserLoggedIn(): boolean {
    return LocalStorage.has('firstName') && LocalStorage.has('lastName');
  }

  renderPage(idPage: string) {
    const currentPage = document.querySelector(`#${this.defaultPageId}`);
    if (currentPage) {
      currentPage.remove();
    }
    let page: PageTemplate | null = null;

    switch (idPage) {
      case PageIds.MainPage:
        page = new MainLoginPage(idPage);
        break;
      case PageIds.StartPage:
        if (App.isUserLoggedIn()) {
          page = new GameDescription(idPage);
        } else {
          page = new MainLoginPage(idPage);
        }
        break;
      case PageIds.StartGamePage:
        if (App.isUserLoggedIn()) {
          page = new GamePage(idPage);
        } else {
          page = new MainLoginPage(idPage);
        }
        break;
      default:
        page = new ErrorPage(idPage, ErrorTypes.Error_404);
        break;
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

  run() {
    this.container.append(this.header.render());
    if (App.isUserLoggedIn()) {
      this.renderPage(PageIds.StartPage);
    } else {
      this.renderPage(PageIds.MainPage);
    }
    this.enableRouteChange();
  }
}
