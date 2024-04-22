const restriction: { [key: string]: RegExp } = {
  login: /^[a-zA-Z0-9]{3,}$/,
  password: /^[a-zA-Z0-9]{4,}$/
};

const errorMsg: {[key: string]: string} = {
  login: 'Consist of min 3 symbols, letter or number',
  password: 'Consist of min 4 symbols,one letter in UpperCase or number',
  repeatName: 'This name was used'
};

function displayError(input: HTMLInputElement, message: string) {
  const error = document.createElement('p');
  error.className = 'error-message';
  error.textContent = message;
  const secondFormDiv = input.parentElement?.nextElementSibling;
  if (secondFormDiv) {
    secondFormDiv.insertAdjacentElement('afterend', error);
  }
}

function clearErrorMessages() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((message) => message.remove());
}

function validateInput(value: string, type: 'login' | 'password'): boolean {
  const pattern = restriction[type];
  return pattern.test(value);
}

export {restriction, errorMsg, displayError, clearErrorMessages, validateInput}