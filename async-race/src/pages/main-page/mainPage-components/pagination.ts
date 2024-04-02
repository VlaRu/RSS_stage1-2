import RenderPageElements from '../../../templates/pageElemTemplate';
import { getCars } from '../../../api/api';
import ButtonRenderer from '../../../templates/buttonRenderer';
import { prevButton, nextButton } from './paginationButton';
import { pageNumber } from './paginationButton';

//export let carsCount: number = 0;
export const cars = {
  count: 1
}
export default class PaginationPage extends RenderPageElements {
  async createPaginationContainer(): Promise<HTMLElement> {
    const { count: fetchedCarsCount } = await getCars(pageNumber.number);
    cars.count = parseInt(fetchedCarsCount || '0', 10);
    const paginationContainer = await this.createPageElement('div', 'pagination-container');
    const garageParagraph = await this.createPageElement('p', 'count-car_garage', `Garage: ${cars.count}`);
    const pageParagraph = await this.createPageElement('p', 'count-page_garage', `Page: ${pageNumber.number}`);
    paginationContainer.appendChild(garageParagraph);
    paginationContainer.appendChild(pageParagraph);

    const buttonRenderer = new ButtonRenderer(paginationContainer, [prevButton, nextButton]);
    buttonRenderer.render();
    return paginationContainer;
  }
}