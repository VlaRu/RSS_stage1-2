import UserSession from '../../server/userAuthentication';
import { errorMsg, displayError, validateInput, clearErrorMessages } from './validation';
import { PageIds } from '../../router/router';

export const userCredentials: { username: string; password: string }[] = [];

export function submitLoginForm(event: Event) {
  event.preventDefault();
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;

  const nameValue = nameInput.value;
  const passwordValue = passwordInput.value;

  const UserAuth = new UserSession()

  let isValid = true;
  clearErrorMessages();
  const existingUser = userCredentials.find(cred => cred.username === nameValue);
  if (existingUser) {
    if (existingUser.password !== passwordValue) {
      displayError(nameInput, errorMsg.repeatName);
      isValid = false;
    }
  }
  if (!validateInput(nameValue, 'login')) {
    displayError(nameInput, errorMsg.login);
    isValid = false;
  }
  if (!validateInput(passwordValue, 'password')) {
    displayError(passwordInput, errorMsg.password);
    isValid = false;
  }
  if(isValid) {
    UserAuth.loginUser(nameValue, passwordValue);
    console.log(`The user: Name: ${nameValue}, Password: ${passwordValue} was logined`);
    sessionStorage.setItem('username', nameValue);
    sessionStorage.setItem('password', passwordValue);
    userCredentials.push({ username: nameValue, password: passwordValue });
    window.location.hash = PageIds.ChatPageId;
  }
}

export function handleLogout() {
  const userAuth = new UserSession();
  const username = sessionStorage.getItem('username') || '';
  const password = sessionStorage.getItem('password') || '';
  userAuth.logoutUser(username, password);
  console.log(`logout user ${username} ${password}`);
}