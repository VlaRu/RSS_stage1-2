import FormTemplate from "../../../templates/formTemplate";
import { createCar, Car, updateCar } from "../../../api/api";

const newcarId: number = 1;

export default class ContainerCreateCar {

  static createFormForCreatingCar(): HTMLFormElement {
    const form = FormTemplate.createForm('text', 'created_name-car', 'Create new car');
    this.attachFormSubmitHandler(form);
    return form;
  }

  static createFormForModifyingCar(): HTMLFormElement {
    const form = FormTemplate.createForm('text', 'modified_name-car', 'Modify selected car');
    this.attachFormSubmitChangedHandler(form, newcarId);
    return form;
  }

  static attachFormSubmitHandler(form: HTMLFormElement): void {
    const handleSubmit = async (formData: { text: string, color: string }) => {
      const newCar: Car = {
        name: formData.text,
        color: formData.color,
      };

      try {
        const createdCar = await createCar(newCar);
        console.log('Car created:', createdCar);
      } catch (error) {
        console.error('Error creating car:', error);
      }
    };
    FormTemplate.handleFormSubmit(form, handleSubmit);
  }

  static attachFormSubmitChangedHandler(form: HTMLFormElement, carId: number): void {
    const handleSubmit = async (formData: { text: string, color: string }) => {
      const newCar: Car = {
        name: formData.text,
        color: formData.color,
      };

      try {
        const createdCar = await updateCar(carId, newCar);
        console.log(`Car created: ${carId}`, createdCar);
      } catch (error) {
        console.error('Error creating car:', error);
      }
    };
    FormTemplate.handleFormSubmit(form, handleSubmit);
  }

  static formContainer(): HTMLDivElement {
    const container = document.createElement('div');
    container.className = 'container_modify-car';
    container.append(ContainerCreateCar.createFormForCreatingCar());
    container.append(ContainerCreateCar.createFormForModifyingCar());
    return container;
  }
}