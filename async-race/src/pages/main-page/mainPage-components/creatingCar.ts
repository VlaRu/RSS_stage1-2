import FormTemplate from "../../../templates/inputTemplate";

export default class ContainerCreateCar {
  static createFormForCreatingCar(): HTMLFormElement {
    const form = FormTemplate.createForm('text', 'created_name-car', 'Create new car');
    return form;
  }

  static createFormForModifyingCar(): HTMLFormElement {
    const form = FormTemplate.createForm('text', 'modified_name-car', 'Modify selected car');
    return form;
  }

  static formContainer(): HTMLDivElement {
    const container = document.createElement('div');
    container.className = 'container_modify-car';
    container.append(ContainerCreateCar.createFormForCreatingCar());
    container.append(ContainerCreateCar.createFormForModifyingCar());
    return container;
  }
}
