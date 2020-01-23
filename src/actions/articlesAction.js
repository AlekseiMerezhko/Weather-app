export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const addArticle = payload => ({
  type: ADD_ARTICLE,
  payload
});

export const deleteArticle = payload => ({
  type: DELETE_ARTICLE,
  payload
});
