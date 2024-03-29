import NavigatePage from './mainPage-components/navigatePage';
import ContainerCreateCar from './mainPage-components/creatingCar';
import RenderPageElements from '../../templates/pageElemTemplate';
import PaginationPage from './mainPage-components/pagination';
import RaceContainer from './mainPage-components/raceContainer';

export default class MainPage {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  async render() {
    const titlePage = RenderPageElements.createHeaderTitle('Hello to the main page of the Async-race game');
    const navigatePage = new NavigatePage();
    const paginationPage = new PaginationPage('div', '');
    const raceContainer = new RaceContainer('div', 'race-container');
    const paginationContainer = await paginationPage.createPaginationContainer();
    const navigateContainer = await navigatePage.render();
    const raceContainerRender = await raceContainer.render();

    this.container.append(
      titlePage,
      navigateContainer,
      ContainerCreateCar.formContainer(),
      paginationContainer,
      raceContainerRender
    );

    return this.container;
  }
}
