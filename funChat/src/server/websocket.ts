import { Request } from "./wsTemplate";

export const socket = new WebSocket('ws://localhost:4000');
socket.addEventListener('open', () => console.log(`webs was opened`))
socket.onclose = (request) => console.log(`webs was close ${request.type}`);
socket.onerror = (error) => console.error("ERROR:", error);
socket.onmessage = (event) => console.log(`msg : ${event.data}`);

export function getActiveUsers(typeUser: string) {

  const request: Request = {
    id: null,
    type: typeUser,
    payload: null
  };

  const requestData = JSON.stringify(request);
  socket.send(requestData);

  socket.addEventListener('message', (event) => {
    const ul = document.querySelector('.users-container') as HTMLElement;
    if (!ul) {
      console.error('Error: ul element not found');
      return;
    }
    const response = JSON.parse(event.data);

    if (response.payload && Array.isArray(response.payload.users)) {
      const loggedUsers = response.payload.users;

      for (const user of loggedUsers) {
        console.log(`list of users login: ${user.login} has ${request.type}`);
        const list = document.createElement('li');
        list.innerText = user.login;
        list.className = 'user-name'
        ul.appendChild(list);

        if(typeUser === 'USER_INACTIVE') {
          list.className = 'user-offLine';
        }
      }
    }
  });
}

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  switch (msg.type) {
    case "USER_LOGIN":
      console.log(msg);
      break;
    case "USER_LOGOUT":
      console.log(msg);
      break;
    case "MSG_READ":
      console.log(msg);
      break;
    case "MSG_DELIVER":
      console.log(msg);
      break;
    case "MSG_DELETE":
      console.log(msg);
      break;
    case "MSG_EDIT":
      console.log(msg);
      break;
    case "MSG_FROM_USER":
      console.log(msg);
      break;
    default:
      console.log(msg);
  }
};

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  switch (msg.type) {
    case "USER_LOGIN":
      console.log(msg);
      break;
    case "USER_LOGOUT":
      console.log(msg);
      break;
    case "MSG_READ":
      console.log(msg);
      break;
    case "MSG_DELIVER":
      console.log(msg);
      break;
    case "MSG_DELETE":
      console.log(msg);
      break;
    case "MSG_EDIT":
      console.log(msg);
      break;
    case "MSG_FROM_USER":
      console.log(msg);
          break;
    default:
      console.log(msg);
  }
};

 /* loggedUsers.forEach((user: { login: string }) => {
        console.log(`list of users login: ${user.login}`);
        const list = document.createElement('li');
        list.innerText = user.login;
        ul.appendChild(list);
        // eslint-disable-next-line no-constant-condition, no-cond-assign
        if(request.type = 'USER_INACTIVE'){
          list.className = 'user-offLine';
        }
      }); */

export function sendMessage(name: string, text: string) {
  const request = {
    id: '',
    type: "MSG_SEND",
    payload: {
      message: {
        to: name,
        text: text,
      }
    }
  }

  const requestData = JSON.stringify(request);

  socket.send(requestData);
  console.log(`the message sended: ${requestData}`);
}

export function messageFromUser(nameFrom: string, nameTo: string) {
  const dateMessage = new Date();
  const formattedDate = `${dateMessage.toLocaleDateString()} ${dateMessage.toLocaleTimeString()}`;

  const request = {
    id: '',
    type: "MSG_SEND",
    payload: {
      message: {
        id: '',
        from: nameFrom,
        to: nameTo,
        text: '',
        datetime: formattedDate,
        status: {
          isDelivered: false,
          isReaded: false,
          isEdited: false,
        }
      }
    }
  }

  const requestData = JSON.stringify(request);
  socket.send(requestData);


}



setTimeout(() => {
  messageFromUser("Hola",'Pirat')
  socket.addEventListener('message', (event) => {
    const response = JSON.parse(event.data);
    console.log(response);
  })
}, 1000)



// console.log(messageFromUser('Hola','Pirat'));


// Handle incoming messages from the socket
/* socket.onmessage = (event) => {
  const message = event.data;
  const messageElem = document.createElement('div');
  messageElem.textContent = message;
  messagesDiv.prepend(messageElem);
}; */

// WebSocket connection opened
/* socket.addEventListener('open', () => {
  console.log('WebSocket connection opened');
}); */

// WebSocket connection closed
/* socket.addEventListener('close', () => {
  console.log('WebSocket connection closed');
}); */

// WebSocket error
/* socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
}); */



// Handle messages from the WebSocket server
/* socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  switch (message.event) {
    case 'message':
      connectionWithAll(message);
      break;
    case 'connection':
      connectionWithAll(message);
      break;
      default:
        console.warn('Unhandled message event:', message);
        break;
  }
}); */


// =====================================

/*
socket.addEventListener('message', (event) => {
  console.log('Message from server ', event.data);
}); */

// закрывающая сторона:

/* socket.onclose = (event: any) => {
  if (event.wasClean) {
    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    console.log(event.code === 1000);
    console.log(event.reason === 'работа закончена');
    console.log(event.wasClean === true); // (закрыто чисто)
  } else {
    console.log('[close] Соединение прервано');
  }
}; */


// Send message
/* function sendMessage(type: string, payload: any) {
  const message = {
    id: Math.random().toString(36).substr(2, 9),
    type: type,
    payload: payload,
  };
  console.log(message.id);

  socket.send(JSON.stringify(message));
} */

// Logging user
/* function loginUser(username: string, password: string) {
  const request = {
    id: 'login_request',
    type: 'USER_LOGIN',
    payload: {
      user: {
        login: username,
        password: password,
      },
    },
  };

  const requestData = JSON.stringify(request);

  socket.send(requestData);
}

function islogined(username: string) {
  const request = {
    id: 'islogined_request',
    type: 'IS_LOGINED',
    payload: {
      user: {
        login: username,
        islogined: true,
      },
    },
  };

  const requestData = JSON.stringify(request);

  socket.send(requestData);
} */