import NavigatePage from "./navigatePage";
import ContainerCreateCar from "./creatingCar";
import RenderPageElements from "../../templates/pageElemTemplate";
import PaginationPage from "./pagination";
import RaceContainer from "./raceContainer";
export default class MainPage {
  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  render(){
    const titlePage = RenderPageElements.createHeaderTitle('Hello to the main page of the Async-race game');
    this.container.append(titlePage);
    const navigatePage = new NavigatePage();
    this.container.append(navigatePage.render());
    this.container.append(ContainerCreateCar.formContainer());
    const paginationPage = new PaginationPage('div', '');
    this.container.append(paginationPage.createPaginationContainer());
    const raceContainer = new RaceContainer('div', 'race-container');
    this.container.append(raceContainer.render());
    return this.container;
  }
}