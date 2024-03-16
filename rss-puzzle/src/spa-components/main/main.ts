import './form.css';
import PageTemplate from '../core/template';
import InputTemplate from './inputTemplate';
import { validateForm } from './validation';
export default class MainLoginPage extends PageTemplate {
  static TextObject = {
    MainTitle: 'Login',
  };

  render() {
    const title = this.createHeaderTitle(MainLoginPage.TextObject.MainTitle);
    const firstNameInput = InputTemplate.createInput('fname', 'First name:', 'input_form');
    const lastNameInput = InputTemplate.createInput('lname', 'Surname:');
    const submitButton = InputTemplate.createSubmitButton();

    const form = document.createElement('form');
    form.appendChild(title);
    form.appendChild(firstNameInput);
    form.appendChild(lastNameInput);
    form.appendChild(submitButton);

    validateForm(form);

    this.container.appendChild(form);

    return this.container;
  }
}
