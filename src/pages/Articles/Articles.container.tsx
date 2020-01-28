import { connect } from "react-redux";
import { addArticle } from "../../actions/articlesAction";
import Articles from "./Articles";

type User = {
  email: string;
  name: string;
};
type Article = {
  img: string;
  important: boolean;
  category: string;
  title: string;
  body: string;
  creatorName: string;
  pseudonym: string;
};
type ArticlesStore = Article[];

type Store = {
  user: User;
  articles: ArticlesStore;
};

export default connect(({ articles, user }: any) => ({ articles, user }), {
  addArticle
})(Articles);
