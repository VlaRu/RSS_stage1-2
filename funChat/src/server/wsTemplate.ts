type RequestType =
  | string
  | "USER_LOGIN"
  | "USER_LOGOUT"
  | "USER_EXTERNAL_LOGIN"
  | "USER_EXTERNAL_LOGOUT"
  | "USER_ACTIVE"
  | "USER_INACTIVE"
  | "MSG_SEND"
  | "MSG_FROM_USER"
  | "MSG_DELIVER"
  | "MSG_READ"
  | "MSG_DELETE"
  | "MSG_EDIT";

type UserPayload = {
  user: {
    login: string;
    password: string;
  };
};

type UserStatusPayload = {
  user: {
    login: string;
    isLogined: boolean;
  };
};

type MessagePayload = {
  message: {
    to: string;
    text: string;
  };
};

type MessageIdPayload = {
  message: {
    id: string;
  };
};

export type Request = {
  id: string | null;
  type: RequestType;
  payload: null | UserPayload | UserStatusPayload | MessagePayload | MessageIdPayload;
};