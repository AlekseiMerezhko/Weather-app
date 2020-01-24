import { connect } from "react-redux";
import { login, logout } from "../../actions/loginActions";
import Login from "./Login";

export default connect(({ login }: any) => login, { login, logout })(Login);
