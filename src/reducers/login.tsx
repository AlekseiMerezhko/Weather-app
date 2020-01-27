import { LOGIN, LOGOUT } from "../actions/loginActions";
const initialState = {
  logined: false,
  users: [{ username: "admin", password: "qweqweqwe123" }]
};

type Login = {
  type: "LOGIN";
  logined: boolean;
};

type Logout = {
  type: "LOGOUT";
  logined: boolean;
};

type Action = Login | Logout;

export function loginReducer(state = initialState, action: Action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, logined: true };
    case LOGOUT:
      return { ...state, logined: false };

    default:
      return state;
  }
}
