import RenderPageElement from "../../templates/createElementsTemplate";
import InputTemplate from "../../templates/inputTemplate";
import { sendMessage } from "../../server/websocket";
import { getListUsers } from "../../server/websocket";


function createMessageTextCont(text: string) {
  const dateMessage = new Date();
  const formattedDate = `${dateMessage.toLocaleDateString()} ${dateMessage.toLocaleTimeString()}`;
  const textContainer = RenderPageElement.createPageElement({tag: 'div', className: 'text-container'});
  const dateInfoMessage = RenderPageElement.createPageElement({tag: 'p', className: 'date-message'});
  dateInfoMessage.innerText = formattedDate;
  const chatText = RenderPageElement.createPageElement({tag: 'p', className: 'chat-text'});
  chatText.innerText = text;
  /* const deleteMsg = RenderPageElement.createPageElement({tag: 'img', className: 'trash'});
  deleteMsg.setAttribute('src', ''); */
  textContainer.append(dateInfoMessage, chatText);
  // deleteMsg.addEventListener('click', () => 'delete msg');
  return textContainer
}

function submitMessage(event: Event, loggin: string) {
  event.preventDefault();
  const nameInput = document.getElementById('message') as HTMLInputElement;
  const message = nameInput.value;
  nameInput.value = '';

  if (message) {
    const messageContainer = document.querySelector('.message-text-container') as HTMLElement;
    messageContainer.append(createMessageTextCont(message));
    console.log(`I send message: ${message} for ${loggin}`);
    sendMessage(loggin, message);
  }
}

export default class InputMessage {

  container: HTMLElement;

  selectedUser: string | null = null;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  renderMessage() {
    const listUsersContainer = RenderPageElement.createPageElement({tag: 'div', className: 'list_users-container'});
    const searchUserInList = RenderPageElement.createPageElement({tag: 'input', className: 'search_user'});
    const usersContainer = RenderPageElement.createPageElement({tag: 'ul', className: 'users-container'});
    usersContainer.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        console.log(`I choosed user: ${event.target.textContent} for sennging msg`);
        this.selectedUser = event.target.textContent;
        this.updateUserChatContainer();
      }
    });
    getListUsers(usersContainer);
    listUsersContainer.append(searchUserInList, usersContainer);

    const messageChatContaner = RenderPageElement.createPageElement({tag: 'div', className: 'message_chat-container'});

    const userChatContaner = RenderPageElement.createPageElement({tag: 'div', className: 'user_chat-container'});

    const messageTextContainer = RenderPageElement.createPageElement({tag: 'div',className:'message-text-container'});
    messageTextContainer.innerText = 'Please choose the user for beginning of the dialogue.';
    const inputMessage = new InputTemplate('input-message_container');
    const inputMessageForm = RenderPageElement.createPageElement({tag: 'form',className:'send-message-form'});
    const inputText = inputMessage.createInput('message', '');
    const submitText = InputTemplate.createSubmitButton();
    inputMessageForm.addEventListener('submit', (event) => {
      if (this.selectedUser) {
        messageTextContainer.innerText = '';
        submitMessage(event, this.selectedUser);
        inputMessageForm.removeAttribute('disabled');
      } else {
        inputMessageForm.setAttribute('disabled', 'true');
      }
    });
    inputMessageForm.append(inputText, submitText);
    messageChatContaner.append(userChatContaner, messageTextContainer, inputMessageForm);

    this.container.append(listUsersContainer, messageChatContaner);
    return this.container;
  }

  updateUserChatContainer() {
    const userChatContainer = document.querySelector('.user_chat-container');
    const messageTextContainer = document.querySelector('.message-text-container') as HTMLElement;
    if (userChatContainer instanceof HTMLElement) {
      userChatContainer.innerText = this.selectedUser || '';
      messageTextContainer.innerText = 'is the beginning of the dialogue'
    }
  }
}

