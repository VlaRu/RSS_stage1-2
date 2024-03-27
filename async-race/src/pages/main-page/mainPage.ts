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

  render() {
    const titlePage = RenderPageElements.createHeaderTitle('Hello to the main page of the Async-race game');
    const navigatePage = new NavigatePage();
    const paginationPage = new PaginationPage('div', '');
    const raceContainer = new RaceContainer('div', 'race-container');

    this.container.append(
      titlePage,
      navigatePage.render(),
      ContainerCreateCar.formContainer(),
      paginationPage.createPaginationContainer(),
      raceContainer.render()
    );

    return this.container;
  }
}
