import './login.css'
import RenderPageElement from "../../templates/createElementsTemplate";
import FooterContainer from "../page-info/footer";
import InputTemplate from "../../templates/inputTemplate";
import ButtonTemplate from '../../templates/buttonTemplate';
import { PageIds } from '../../router/router';
import { submitLoginForm } from './handleAuthorization';

const backToInfoBtn = new ButtonTemplate({
  tagName: 'button',
  name: 'To Info',
  className: 'to_info-btn',
  onClick: () => {
    window.location.hash = PageIds.InfoPageId;
  }
})

export default class LoginPage {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  render(){
    const tittlePage = RenderPageElement.createPageElement({tag: 'h1',text:'LoginPage'});
    const footerCont = new FooterContainer('footer');
    const loginForm = RenderPageElement.createPageElement({tag: 'form',className:'login-form_container'});
    const inputNameTemplate = new InputTemplate('inputName');
    const inputName = inputNameTemplate.createInput('name', 'Name:');

    const inputPasswordTemplate = new InputTemplate('inputPassword');
    const inputPassword = inputPasswordTemplate.createInput('password', 'Password:');
    const submitLogForm = InputTemplate.createSubmitButton();
    loginForm.append(inputName, inputPassword,submitLogForm);
    loginForm.addEventListener('submit', submitLoginForm);
    const toInfoPageBtn = backToInfoBtn.createButton()
    this.container.append(tittlePage, toInfoPageBtn, loginForm, footerCont.render());
    return this.container;
  }
}

