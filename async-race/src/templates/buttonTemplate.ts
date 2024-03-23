export default class ButtonTemplate {
  tagName: string;

  name: string;

  className?: string;

  onClick?: () => void;

  constructor(tagName: string, name: string, className?: string, onClick?: () => void) {
    this.tagName = tagName;
    this.name = name;
    this.className = className;
    this.onClick = onClick;
  }

  createButton(): HTMLElement {
    const button = document.createElement(this.tagName);
    button.innerText = this.name;
    if (this.className) {
      button.className = this.className;
    }
    if (this.onClick) {
      button.addEventListener('click', this.onClick);
    }
    return button;
  }
}

/*
const myButton = new ButtonTemplate('button', 'Click Me', 'custom-button', () => {
  console.log('Button clicked');
});

const nextButton = myButton.createButton();
document.body.appendChild(nextButton);
*/