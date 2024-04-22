import RenderPageElement from "../../templates/createElementsTemplate";
import ButtonTemplate from '../../templates/buttonTemplate';
import InputMessage from "./inputMessageContainer";
import { PageIds } from '../../router/router';
import { handleLogout } from "../page-login/handleAuthorization";

const logout = new ButtonTemplate({
  tagName: 'button',
  name: 'Logout',
  className: 'infologinBtn',
  onClick: () => {
    window.location.hash = PageIds.LoginPageId;
    handleLogout();
  }
})

export default class ChatContainer {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  renderContainer(){
    const headContainer = RenderPageElement.createPageElement({tag: 'div', className: 'container-header-chat'});
    const userAuthenticatedName = RenderPageElement.createPageElement({tag: 'h3', className: 'user_authenticated-name', text: 'user name'});
    const username = sessionStorage.getItem('username') || '';
    userAuthenticatedName.innerText = username;
    const chatName = RenderPageElement.createPageElement({tag: 'h3', className: 'chat-name', text: 'Chat'});
    const logoutBtn = logout.createButton();
    headContainer.append(userAuthenticatedName, chatName, logoutBtn);
    const messageCont = new InputMessage('main_message-container')
    const messageContainer = messageCont.renderMessage();

    this.container.append(headContainer, messageContainer);
    return this.container;
  }
}