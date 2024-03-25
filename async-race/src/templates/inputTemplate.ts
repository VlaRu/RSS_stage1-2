export default class InputTemplate {
  static createInput(type: string, id: string, labelText: string, className?: string): HTMLDivElement {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.className = 'label-input';
    label.htmlFor = id;

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;
    if (className) {
      input.className = className;
    }

    const container = document.createElement('div');
    container.className = 'form';
    container.appendChild(label);
    container.appendChild(input);
    return container;
  }

  static createSubmitButton(): HTMLInputElement {
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    submitButton.className = 'button_submit';
    return submitButton;
  }
}
