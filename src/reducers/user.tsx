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

type User = { name: string; email: string };
type CurrentUser = { currentUser: User };
type Users = { users: User[] };
type EditMode = { editMode: { active: boolean; name: string; email: string } };
type InitialState = {
  editMode: EditMode;
  currentUser: CurrentUser;
  users: Users;
};
type ChangeUser = {
  type: "CHANGE_USER";
  payload: CurrentUser;
};

type AddUser = {
  type: "ADD_USER";
  payload: Users;
};
type DeleteUser = {
  type: "DELETE_USER";
  payload: Users;
};
type EditUserStart = {
  type: "EDIT_USER_START";
  payload: EditMode;
};
type EditUserEnd = {
  type: "EDIT_USER_END";
  payload: InitialState;
};

type Action = ChangeUser | AddUser | DeleteUser | EditUserStart | EditUserEnd;

export function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_USER:
      return { ...state, currentUser: action.payload.currentUser };
    case ADD_USER:
      return { ...state, users: action.payload.users };
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
