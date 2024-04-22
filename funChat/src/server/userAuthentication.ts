import { socket } from "./websocket";

export default class UserSession {
  private id: string | null = null;

  private sendRequest(type: string, username: string, password: string) {
    const requestId = this.id || this.generateId();

    const request = {
      id: requestId,
      type: type,
      payload: {
        user: {
          login: username,
          password: password
        }
      }
    };

    const requestData = JSON.stringify(request);
    socket.send(requestData);
  }

  private generateId(): string {
    const newId = Math.random().toString(36).substr(2, 9);
    this.id = newId;
    return newId;
  }

  loginUser(username: string, password: string) {
    this.sendRequest("USER_LOGIN", username, password);
    console.log(`the user: ${username} with id ${this.id} was logged in`);
  }

  logoutUser(username: string, password: string) {
    this.sendRequest("USER_LOGOUT", username, password);
    console.log(`the user: ${username} with id ${this.id} is logged out`);
  }
}