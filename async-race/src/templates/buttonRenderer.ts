import ButtonTemplate from "./buttonTemplate";

type Button = {
  text: string;
  class: string;
  onClick: (carId: number) => void;
};

export default class ButtonRenderer {
  container: HTMLElement;

  buttons: Button[];

  constructor(container: HTMLElement, buttons: Button[]) {
    this.container = container;
    this.buttons = buttons;
  }

  render() {
    this.buttons.forEach((button) => {
      const buttonElement = new ButtonTemplate('button', button.text, button.class, button.onClick).createButton();
      this.container.appendChild(buttonElement);
    });
  }
}