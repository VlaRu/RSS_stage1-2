const restriction: RegExp = /^[A-Z][a-zA-Z-]+$/;

const minChar = {
  firstName: 3,
  surname: 4,
};

const errorMsg = {
  uppercaseFirstLetter: 'First letter must be in uppercase',
  onlyAlphabetsAndHyphen: 'Only accept English alphabet letters and the hyphen (-) symbol',
  minCharacters: `Input must have more than ${minChar.firstName} characters for first name and ${minChar.surname} characters for surname`,
};

function displayError(input: HTMLInputElement, message: string) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  const secondFormDiv = input.parentElement?.nextElementSibling;
  if (secondFormDiv) {
    secondFormDiv.insertAdjacentElement('afterend', errorDiv);
  }
}

function clearErrorMessages() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((message) => message.remove());
}

export function validateForm(form: HTMLFormElement) {
  form.addEventListener('submit', (event): void => {
    event.preventDefault();
    clearErrorMessages();

    const firstNameInput = document.getElementById('fname') as HTMLInputElement;
    const lastNameInput = document.getElementById('lname') as HTMLInputElement;

    let errorFound = false;

    if (!/^[A-Z]/.test(firstNameInput.value)) {
      displayError(firstNameInput, errorMsg.uppercaseFirstLetter);
      errorFound = true;
    }
    if (!/^[A-Z]/.test(lastNameInput.value)) {
      displayError(lastNameInput, errorMsg.uppercaseFirstLetter);
      errorFound = true;
    }
    if (!restriction.test(firstNameInput.value) || !restriction.test(lastNameInput.value)) {
      displayError(firstNameInput, errorMsg.onlyAlphabetsAndHyphen);
      errorFound = true;
    }
    if (firstNameInput.value.length < minChar.firstName) {
      displayError(firstNameInput, errorMsg.minCharacters);
      errorFound = true;
    }
    if (lastNameInput.value.length < minChar.surname) {
      displayError(lastNameInput, errorMsg.minCharacters);
      errorFound = true;
    }

    if (!errorFound) {
      form.submit();
    }
  });
}
