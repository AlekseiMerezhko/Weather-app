import { ADD_ARTICLE, DELETE_ARTICLE } from "../actions/articlesAction";

export const articlesReducer = (
  state = {
    articles: []
  },
  action
) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload.articles]
      };
      case DELETE_ARTICLE:
        return {
          ...state,
          articles: action.payload.articles
        };
    default:
      return state;
  }
};
