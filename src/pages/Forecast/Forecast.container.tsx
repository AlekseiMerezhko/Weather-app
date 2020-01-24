import { connect } from "react-redux";
import Forecast from "./Forecast";

type cities = {
  value: string;
  cities: [any];
  currentCity: null | undefined | string;
  loading: boolean;
};

export default connect(({ cities }: cities) => cities)(Forecast);
