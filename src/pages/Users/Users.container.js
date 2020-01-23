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

// export default connect(state => ({
//   user: state.user,
// }), { changeUser })(Users);

export default connect(({ user, articles }) => ({ user, articles }), {
  changeUser,
  addUser,
  deleteUser,
  editUserStart,
  editUserEnd,
  deleteArticle
})(Users);
