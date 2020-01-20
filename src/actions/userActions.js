export const CHANGE_USER = "CHANGE_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_END = "EDIT_USER_END";

export const changeUser = payload => ({
  type: CHANGE_USER,
  payload
});
export const addUser = payload => ({
  type: ADD_USER,
  payload
});
export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
});
export const editUserStart = payload => ({
  type: EDIT_USER_START,
  payload
});
export const editUserEnd = payload => ({
  type: EDIT_USER_END,
  payload
});
