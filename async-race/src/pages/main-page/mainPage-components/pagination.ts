import RenderPageElements from "../../../templates/pageElemTemplate";

export default class PaginationPage extends RenderPageElements {
  async createPaginationContainer(): Promise<HTMLElement> {
    const paginationContainer = await this.createPageElement('div', 'pagination-container');
    const garageParagraph = await this.createPageElement('p', 'count-car_garage', 'Garage: ');
    const garageSpan = await this.createPageElement('span', '', '0');
    garageParagraph.appendChild(garageSpan);

    const pageParagraph = await this.createPageElement('p', 'count-page_garage', 'Page: ');
    const pageSpan = await this.createPageElement('span','', '0');
    pageParagraph.appendChild(pageSpan);

    paginationContainer.appendChild(garageParagraph);
    paginationContainer.appendChild(pageParagraph);

    return paginationContainer;
  }
}
