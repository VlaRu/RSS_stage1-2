import './login.css'
import RenderPageElement from "../../templates/createElementsTemplate";
import FooterContainer from "../page-info/footer";
import InputTemplate from "../../templates/inputTemplate";
import ButtonTemplate from '../../templates/buttonTemplate';
import { PageIds } from '../../router/router';


const backToInfoBtn = new ButtonTemplate({
  tagName: 'button',
  name: 'To Info',
  className: 'to_info-btn',
  onClick: () => {
    console.log('Button clicked, and toword into info page');
    window.location.hash = PageIds.InfoPageId;
  }
})

function submit(event: Event) {
  event.preventDefault();
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;

  const nameValue = nameInput.value;
  const passwordValue = passwordInput.value;

  console.log(`Name: ${nameValue}, Password: ${passwordValue}`);
  window.location.hash = PageIds.ChatPageId;
}

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
    loginForm.addEventListener('submit', submit);
    const toInfoPageBtn = backToInfoBtn.createButton()
    this.container.append(tittlePage, toInfoPageBtn, loginForm, footerCont.render());
    return this.container;
  }
}

