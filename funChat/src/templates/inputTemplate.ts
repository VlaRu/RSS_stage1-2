
export default class InputTemplate {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  createInput(id: string, labelText: string, className?: string): HTMLElement {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.className = 'label-input';
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.required = true;
    if (className) {
      input.className = className;
    }
    this.container.append(label);
    this.container.append(input);
    return this.container;
  }

  static createSubmitButton(): HTMLInputElement {
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    submitButton.className = 'button_submit';
    return submitButton;
  }
}