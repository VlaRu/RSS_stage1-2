export default function createButtonEngine(className: string, text: string, container: HTMLElement): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = className;
  button.innerText = text;
  container.appendChild(button);
  return button;
}
