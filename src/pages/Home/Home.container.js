import { connect } from "react-redux";
import { getCities } from "../../actions/getCitiesAction";
import Home from "./Home";

export default connect(({ cities }) => cities, { getCities })(Home);
