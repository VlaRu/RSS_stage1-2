import RenderPageElement from "../../templates/createElementsTemplate";

export default class FooterContainer {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  render(){
    const footerParagraph = RenderPageElement.createPageElement({tag: 'p', className: 'footer-paragraph',
    text: 'Created by Vladyslava Nikitchenko, 2024 for RSS-school cours'});
    const logoLink = RenderPageElement.createPageElement({tag: 'a', href: 'https://rs.school/'});
    const logoImg = RenderPageElement.createPageElement({tag: 'img', className: 'rss-logo_img', src: 'https://rolling-scopes-school.github.io/vlaru-JSFE2022Q3/songbird/assets/rs_school_js.svg'});
    logoLink.append(logoImg);
    const gitLink = RenderPageElement.createPageElement({tag: 'a', href: 'https://github.com/vlaru'});
    const gitImg = RenderPageElement.createPageElement({tag: 'img', src: 'https://rolling-scopes-school.github.io/vlaru-JSFE2022Q3/songbird/assets/GitHub-Mark-64px.png'});
    gitLink.append(gitImg);
    this.container.append(footerParagraph, logoLink, gitLink);
    return this.container;
  }
}