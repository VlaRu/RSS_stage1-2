type ElementAttributes = {
  tag: string;
  text?: string;
  className?: string;
  id?: string;
  href?: string;
  src?: string;
  alt?: string;
};

export default class RenderPageElement {

  tagName: string;

  className: string;

  constructor(tagName: string, className: string) {;
    this.tagName = tagName;
    this.className = className;
  }

  static createPageElement(attributes: ElementAttributes): HTMLElement {
    const {tag, text, className, id, href, src} = attributes;
    const element = document.createElement(tag);
    if (text) {
      element.innerText = text;
    }
    if (className) {
      element.className = className;
    }
    if (id) {
      element.id = id;
    }
    if (href && tag === 'a') {
      (element as HTMLAnchorElement).href = href;
    }
    if (src && tag === 'img') {
      (element as HTMLImageElement).src = src;
    }
    return element;
  }
}