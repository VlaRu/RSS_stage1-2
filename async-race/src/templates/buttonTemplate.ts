const idCar: number = 2;

export default class ButtonTemplate {
  tagName: string;

  name: string;

  className?: string;

  onClick?: (carId: number) => void;

  constructor(tagName: string, name: string, className?: string, onClick?: (carId: number) => void) {
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
      button.addEventListener('click', () => this.onClick?.(idCar));
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