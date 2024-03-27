import RenderPageElements from "../../../templates/pageElemTemplate";

export default class PaginationPage extends RenderPageElements {
  createPaginationContainer(): HTMLElement {
    const paginationContainer = this.createElements('div', 'pagination-container');
    const garageParagraph = this.createElements('p');
    garageParagraph.className = 'count-car_garage';
    garageParagraph.innerText = 'Garage: ';
    const garageSpan = this.createElements('span');
    garageSpan.innerText = '0';
    garageParagraph.appendChild(garageSpan);

    const pageParagraph = this.createElements('p');
    pageParagraph.innerText = 'Page: ';
    pageParagraph.className = 'count-page_garage';
    const pageSpan = this.createElements('span');
    pageSpan.innerText = '0';
    pageParagraph.appendChild(pageSpan);

    paginationContainer.appendChild(garageParagraph);
    paginationContainer.appendChild(pageParagraph);

    return paginationContainer;
  }
}
