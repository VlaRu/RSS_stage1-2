import ChatPage from "../pages/page-chat/mainPageChat";
import InfoPage from "../pages/page-info/pageInfo";
import LoginPage from "../pages/page-login/pageLogin";
// import ErrorPage, {ErrorTypes} from "./error";

export const enum PageIds {
  InfoPageId = 'info-page',
  LoginPageId = 'login-page',
  ChatPageId = 'chat-page',
}

export default class Router {
  private container = document.body;

  private defaultPageId: string = 'current-page';

  async  renderPage(idPage: string){
    const currentPage = document.querySelector(`#${this.defaultPageId}`);
    if (currentPage) {
      currentPage.remove();
    }

    let page = null;
    switch (idPage) {
      case PageIds.ChatPageId:
        page = new ChatPage(idPage);
        break;
      case PageIds.InfoPageId:
        page = new InfoPage(idPage);
        break;
      case PageIds.LoginPageId:
        page = new LoginPage(idPage);
        break;
      default:
        page = new InfoPage(idPage);
        break;
    }

    if (page) {
      const pageHTML = await page.render();
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