import { cars } from "./pagination";
import { raceContainer } from "../mainPage";

export const carsPerPage: number = 7;

export const pageNumber = {
  number: 1
}

const prevButton = {
  text: 'Previous',
  class: 'prev-button',
  onClick: async () => {
    if (pageNumber.number > 1) {
      pageNumber.number -= 1;
      raceContainer.container.innerHTML = '';
      raceContainer.render()
      const countPageGarrage = document.querySelector('.count-page_garage') as HTMLElement;
      countPageGarrage.textContent = `Page: ${pageNumber.number}`;
      console.log(pageNumber.number);
    }
  },
};

const nextButton = {
  text: 'Next',
  class: 'next-button',
  onClick: async () => {
    const totalPages = Math.ceil(cars.count / carsPerPage);
    if (pageNumber.number < totalPages) {
      pageNumber.number += 1;
      raceContainer.container.innerHTML = '';
      raceContainer.render()
      const countPageGarrage = document.querySelector('.count-page_garage') as HTMLElement;
      countPageGarrage.textContent = `Page: ${pageNumber.number}`;
      console.log(pageNumber.number);
    }
  },
};

export { prevButton, nextButton };
