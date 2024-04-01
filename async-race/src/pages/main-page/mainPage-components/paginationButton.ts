import { carsCount } from "./pagination";
import PaginationPage from "./pagination";
import RaceLine from './raceLine';

export const carsPerPage: number = 7;
export let newPage: number;

const raceLine = new RaceLine('div', 'race-line');
export let raceLineContainer: Promise<HTMLElement> | HTMLElement= raceLine.render(1);

const prevButton = {
  text: 'Previous',
  class: 'prev-button',
  onClick: async () => {
    if (PaginationPage.currentPage > 1) {
      PaginationPage.currentPage -= 1;
      const countPageGarrage = document.querySelector('.count-page_garage') as HTMLElement;
      countPageGarrage.textContent = `Page: ${PaginationPage.currentPage}`;
      newPage = PaginationPage.currentPage;
      raceLineContainer = await raceLine.render(newPage);
      console.log(newPage);
    }
  },
};

const nextButton = {
  text: 'Next',
  class: 'next-button',
  onClick: async () => {
    const totalPages = Math.ceil(carsCount / carsPerPage);
    if (PaginationPage.currentPage < totalPages) {
      PaginationPage.currentPage += 1;
      const countPageGarrage = document.querySelector('.count-page_garage') as HTMLElement;
      countPageGarrage.textContent = `Page: ${PaginationPage.currentPage}`;
      newPage = PaginationPage.currentPage;
      raceLineContainer = await raceLine.render(newPage);
      console.log(newPage);
    }
  },
};

export { prevButton, nextButton };
