function createNewElement(tag, className, parent, textContent, attributes = {}) {
  const element = document.createElement(tag);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach((name) => element.classList.add(name));
    } else {
      element.classList.add(className);
    }
  }
  if (textContent) element.textContent = textContent;
  if (parent) parent.appendChild(element);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

export default createNewElement;
