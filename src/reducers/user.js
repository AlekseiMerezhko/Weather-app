import { CHANGE_USER } from "../actions/userActions";
const initialState = {
  name: "Alex"
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, name: action.user };

    default:
      return state;
  }
}
