import { connect } from "react-redux";
import Forecast from "./Forecast";

export default connect(({ cities }) => cities)(Forecast);
