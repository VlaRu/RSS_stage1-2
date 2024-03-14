export default abstract class Component {
  protected container: HTMLElement;

  constructor(tagNAme: string, className: string) {
    this.container = document.createElement(tagNAme);
    this.container.className = className;
  }

  render() {
    return this.container;
  }
}
