import { connect } from "react-redux";
import {
  changeUser,
  addUser,
  deleteUser,
  editUserStart,
  editUserEnd
} from "../../actions/userActions";
import { deleteArticle } from "../../actions/articlesAction";
import Users from "./Users";

type User = {
  email: string;
  name: string;
};
type Article = {
  creatorName: string;
  creatorEmail: string;
  pseodonym: string;
  img: string;
  title: string;
  body: string;
  important: boolean;
  category: string;
  id: string;
};

type Store = {
  user: {
    users: User[];
    currentUser: User;
    editMode: {
      active: boolean;
      name: string;
      email: string;
    };
  };
  articles: { articles: Article[] };
};
export default connect(({ user, articles }: Store) => ({ user, articles }), {
  changeUser,
  addUser,
  deleteUser,
  editUserStart,
  editUserEnd,
  deleteArticle
})(Users);
