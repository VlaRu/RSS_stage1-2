import { Request } from "../../server/wsTemplate";
import { socket } from "../../server/websocket";

export function getListUsers(appendContainer: HTMLElement) {
  const requestActive: Request = {
    id: null,
    type: 'USER_ACTIVE',
    payload: null
  };
  const requestInactive: Request = {
    id: null,
    type: 'USER_INACTIVE',
    payload: null
  };
  const requestDataActive = JSON.stringify(requestActive);
  const requestDataInactive = JSON.stringify(requestInactive);
  socket.send(requestDataActive);
  socket.send(requestDataInactive);
  const username = sessionStorage.getItem('username') || '';
  socket.addEventListener('message', (event) => {
    if (!appendContainer) {
      console.error('Error: ul element not found');
      return;
    }
    const response = JSON.parse(event.data);
    if (response.payload && Array.isArray(response.payload.users)) {
      const loggedUsers = response.payload.users.filter((user: { login: string; }) => user.login !== username);
      for (const user of loggedUsers) {
        console.log(`list of users login: ${user.login} has ${response.type}`);
        const list = document.createElement('li');
        list.innerText = `${user.login}`;
        if(response.type === 'USER_INACTIVE') {
          list.className = 'user-offLine';
        } else {
          list.className = 'user-name';
        }
        appendContainer.appendChild(list);
      }
    }
  });
}