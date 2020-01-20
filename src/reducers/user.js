import { CHANGE_USER, ADD_USER, DELETE_USER } from "../actions/userActions";
const initialState = {
  users: [
    { name: "Alex", email: "merezhko.aleksei@gmail.com" },
    { name: "Igor", email: "igor.malyga@gmail.com" },
    { name: "Dima", email: "dima.popov@gmail.com" }
  ],
  currentUser: { name: "Alex", email: "merezhko.aleksei@gmail.com" }
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, currentUser: action.payload.currentUser };
    //Как правильно?
    case ADD_USER:
      //1
      return { ...state, users: [...state.users, action.payload.user] };
    case DELETE_USER:
      //2
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}
