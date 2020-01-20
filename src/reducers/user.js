import {
  CHANGE_USER,
  ADD_USER,
  DELETE_USER,
  EDIT_USER_START,
  EDIT_USER_END
} from "../actions/userActions";
const initialState = {
  users: [
    { name: "Alex", email: "merezhko.aleksei@gmail.com" },
    { name: "Igor", email: "igor.malyga@gmail.com" },
    { name: "Dima", email: "dima.popov@gmail.com" }
  ],
  currentUser: { name: "Alex", email: "merezhko.aleksei@gmail.com" },
  editMode: {
    active: false,
    name: "",
    email: ""
  }
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, currentUser: action.payload.currentUser };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload.user] };
    case DELETE_USER:
      return { ...state, users: action.payload.users };
    case EDIT_USER_START:
      return {
        ...state,
        editMode: action.payload.editMode
      };
    case EDIT_USER_END:
      return {
        ...state,
        users: action.payload.users,
        currentUser: action.payload.currentUser,
        editMode: action.payload.editMode
      };
    default:
      return state;
  }
}
