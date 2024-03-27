import ButtonTemplate from "./buttonTemplate";

export default class ButtonRenderer {
  container: HTMLElement;
  
  buttons: { text: string; class: string }[];

  constructor(container: HTMLElement, buttons: { text: string; class: string }[]) {
    this.container = container;
    this.buttons = buttons;
  }

  render() {
    this.buttons.forEach((button) => {
      const buttonElement = new ButtonTemplate('button', button.text, button.class).createButton();
      this.container.appendChild(buttonElement);
    });
  }
}