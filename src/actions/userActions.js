export const CHANGE_USER = "CHANGE_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

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
