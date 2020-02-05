import { connect } from "react-redux";
import { getCities, fetchCitiesData } from "../../actions/getCitiesAction";
import Home from "./Home";

export default connect(({ cities }: any) => cities, { fetchCitiesData })(Home);
