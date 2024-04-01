import RenderPageElements from '../../../templates/pageElemTemplate';
import { getCars } from '../../../api/api';
import ButtonRenderer from '../../../templates/buttonRenderer';
import { prevButton, nextButton } from './paginationButton';

export let carsCount: number = 0;
export default class PaginationPage extends RenderPageElements {

  static currentPage: number = 1;

  async createPaginationContainer(): Promise<HTMLElement> {
    const { count: fetchedCarsCount } = await getCars(PaginationPage.currentPage);
    carsCount = parseInt(fetchedCarsCount || '0', 10);
    const paginationContainer = await this.createPageElement('div', 'pagination-container');
    const garageParagraph = await this.createPageElement('p', 'count-car_garage', `Garage: ${carsCount}`);
    const pageParagraph = await this.createPageElement('p', 'count-page_garage', `Page: ${PaginationPage.currentPage}`);
    paginationContainer.appendChild(garageParagraph);
    paginationContainer.appendChild(pageParagraph);

    const buttonRenderer = new ButtonRenderer(paginationContainer, [prevButton, nextButton]);
    buttonRenderer.render();
    return paginationContainer;
  }
}