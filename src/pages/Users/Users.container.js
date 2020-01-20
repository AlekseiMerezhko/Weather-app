import { connect } from "react-redux";
import { changeUser, addUser, deleteUser } from "../../actions/userActions";
import Users from "./Users";

// export default connect(state => ({
//   user: state.user,
// }), { changeUser })(Users);

export default connect(({ user }) => ({ user }), {
  changeUser,
  addUser,
  deleteUser
})(Users);
