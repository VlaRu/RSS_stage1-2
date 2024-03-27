import RenderPageElements from "../../../templates/pageElemTemplate";

export default class PaginationPage extends RenderPageElements {
  createPaginationContainer(): HTMLElement {
    const paginationContainer = this.createPageElement('div', 'pagination-container');
    const garageParagraph = this.createPageElement('p', 'count-car_garage', 'Garage: ');
    const garageSpan = this.createPageElement('span', '', '0');
    garageParagraph.appendChild(garageSpan);

    const pageParagraph = this.createPageElement('p', 'count-page_garage', 'Page: ');
    const pageSpan = this.createPageElement('span','', '0');
    pageParagraph.appendChild(pageSpan);

    paginationContainer.appendChild(garageParagraph);
    paginationContainer.appendChild(pageParagraph);

    return paginationContainer;
  }
}
