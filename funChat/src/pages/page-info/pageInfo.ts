import './pageInfo.css'
import RenderPageElement from "../../templates/createElementsTemplate";
import ButtonTemplate from '../../templates/buttonTemplate';
import { PageIds } from '../../router/router';
import FooterContainer from './footer';

const aboutAppText = 'Hi! Welcome to the Chat !this chat is intended for communication with close friends and quick exchange of information, chat was created 2024 as part of studying in courses RSS-school by Vladyslava Nikitchenko'

const loginBtn = new ButtonTemplate({
  tagName: 'button',
  name: 'Login',
  className: 'infologinBtn',
  onClick: () => {
    console.log('Button clicked, and toword into loggin page');
    window.location.hash = PageIds.LoginPageId;
  }
})

export default class InfoPage {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  render(){
    const containerChatInfo = RenderPageElement.createPageElement({tag: 'div',
    className: 'container-info'});
    const tittlePage = RenderPageElement.createPageElement({tag: 'h1',
    text: 'Chat'});
    const paragraph = RenderPageElement.createPageElement({tag: 'p', text: aboutAppText});
    const toLogginPageBtn = loginBtn.createButton()
    containerChatInfo.append(tittlePage, paragraph,toLogginPageBtn);
    const footerCont = new FooterContainer('footer');
    this.container.append(containerChatInfo, footerCont.render());
    return this.container;
  }
}