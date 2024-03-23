import MainPage from "../pages/main-page/mainPage";
import StartPage from "../pages/start-page/startPage";
import WinnersPage from "../pages/winners-page/winnersPage";
import ErrorPage, {ErrorTypes} from "./error";

export const enum PageIds {
  StartPageId = 'start-page',
  MainPageId = 'main-page',
  WinnersPageId = 'winners-page',
}

export default class Router {
  private container = document.body;

  private defaultPageId: string = 'current-page';

  renderPage(idPage: string){
    const currentPage = document.querySelector(`#${this.defaultPageId}`);
    if (currentPage) {
      currentPage.remove();
    }

    let page = null;
    switch (idPage) {
      case PageIds.MainPageId:
        page = new MainPage(idPage);
        break;
      case PageIds.StartPageId:
        page = new StartPage(idPage);
        break;
      case PageIds.WinnersPageId:
        page = new WinnersPage(idPage);
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
}