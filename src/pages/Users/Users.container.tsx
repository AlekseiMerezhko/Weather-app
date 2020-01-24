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

type Store = {
  user: {
    email: string;
    name: string;
  };
  articles: {};
};
export default connect(({ user, articles }: Store) => ({ user, articles }), {
  changeUser,
  addUser,
  deleteUser,
  editUserStart,
  editUserEnd,
  deleteArticle
})(Users);
