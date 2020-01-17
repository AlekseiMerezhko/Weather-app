import { connect } from "react-redux";
import { changeUser } from "../../actions/userActions";
import Users from "./Users";

// export default connect(state => ({
//   user: state.user,
// }), { changeUser })(Users);

export default connect(null, { changeUser })(Users);
