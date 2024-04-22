import './chatPage.css'
import RenderPageElement from "../../templates/createElementsTemplate";
import FooterContainer from "../page-info/footer";
import ChatContainer from "./chatContainer";

export default class ChatPage {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  render(){
    const tittlePage = RenderPageElement.createPageElement({tag: 'h1', text: 'Welcome to Chat'});
    const chatContainer = new ChatContainer('chat-container');
    const footerCont = new FooterContainer('footer');
    this.container.append(tittlePage, chatContainer.renderContainer(), footerCont.render());
    return this.container;
  }
}