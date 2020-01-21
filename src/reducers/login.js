import { LOGIN, LOGOUT } from "../actions/loginActions";
const initialState = {
  logined: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, logined: true };
    case LOGOUT:
      return { ...state, logined: false };

    default:
      return state;
  }
}
