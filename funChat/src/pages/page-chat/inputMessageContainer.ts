import RenderPageElement from "../../templates/createElementsTemplate";
import InputTemplate from "../../templates/inputTemplate";

function createMessageTextCont(text: string) {
  const dateMessage = new Date();
  const formattedDate = `${dateMessage.toLocaleDateString()} ${dateMessage.toLocaleTimeString()}`;
  const textContainer = RenderPageElement.createPageElement({tag: 'div', className: 'text-container'});
  const dateInfoMessage = RenderPageElement.createPageElement({tag: 'p', className: 'date-message'});
  dateInfoMessage.innerText = formattedDate;
  const chatText = RenderPageElement.createPageElement({tag: 'p', className: 'chat-text'});
  chatText.innerText = text;
  textContainer.append(dateInfoMessage, chatText);
  return textContainer
}

function submitMessage(event: Event) {
  event.preventDefault();
  const nameInput = document.getElementById('message') as HTMLInputElement;
  const nameValue = nameInput.value;
  const messageContainer = document.querySelector('.message-text-container') as HTMLElement;
  messageContainer.append(createMessageTextCont(nameValue));
  console.log(`message: ${nameValue}`);
}

export default class InputMessage {

  container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  renderMessage() {
    const listUsersContainer = RenderPageElement.createPageElement({tag: 'div', className: 'list_users-container'});
    const usersContainer = RenderPageElement.createPageElement({tag: 'ul', className: 'users-container'});
    listUsersContainer.append(usersContainer);

    const messageChatContaner = RenderPageElement.createPageElement({tag: 'div', className: 'message_chat-container'});

    const userChatContaner = RenderPageElement.createPageElement({tag: 'div', className: 'user_chat-container'});

    const messageTextContainer = RenderPageElement.createPageElement({tag: 'div',className:'message-text-container'});

    const inputMessage = new InputTemplate('input-message_container');
    const inputMessageForm = RenderPageElement.createPageElement({tag: 'form',className:'send-message-form'});
    const inputText = inputMessage.createInput('message', '');
    const submitText = InputTemplate.createSubmitButton();
    inputMessageForm.addEventListener('submit', submitMessage);

    inputMessageForm.append(inputText, submitText);
    messageChatContaner.append(userChatContaner, messageTextContainer, inputMessageForm);

    this.container.append(listUsersContainer, messageChatContaner);
    return this.container;
  }
}