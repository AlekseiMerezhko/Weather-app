import { connect } from "react-redux";
import { getCities } from "../../actions/getCitiesAction";
import Home from "./Home";

export default connect(({ cities }: any) => cities, { getCities })(Home);
