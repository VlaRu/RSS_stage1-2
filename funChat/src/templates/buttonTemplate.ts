type Button = {
  tagName: string,
  name: string;
  className: string;
  onClick: () => void;
  id?: string
};

export default class ButtonTemplate {
  tagName: string;

  name: string;

  className: string;

  onClick?: () => void;

  id?: string;

  constructor(buttonAtr: Button) {
    const {tagName, name, className, onClick, id} = buttonAtr;
    this.tagName = tagName;
    this.name = name;
    this.className = className;
    this.onClick = onClick;
    this.id = id;
  }

  createButton(): HTMLElement {
    const button = document.createElement(this.tagName);
    button.innerText = this.name;
    button.className = this.className;
    if (this.onClick) {
      button.addEventListener('click', this.onClick);
    }

    if (this.id) {
      button.id = this.id;
    }

    return button;
  }
}

// use
/* const myButton = new ButtonTemplate({
  tagName: 'button',
  name: 'Click Me',
  className: 'btn-class',
  onClick: () => {
    console.log('Button clicked');
  },
  id: 'myButtonId'
});

document.body.appendChild(myButton.createButton()); */