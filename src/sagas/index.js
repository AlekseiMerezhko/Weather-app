import { put, takeLatest, all } from "redux-saga/effects";
import {
  getCitiesSuccess,
  getCitiesError,
  emptyCityValue
} from "../actions/getCitiesAction";
import { apiKey } from "../const/index";
import { cityAutocomplete } from "../api/axios";

function* fetchCities(props) {
  if (props.payload.value) {
    try {
      const { data } = yield cityAutocomplete(apiKey, props.payload.cityValue);
      const citiesArray = yield data.map(city => ({
        ...city,
        label: `${city.LocalizedName}, ${city.Country.LocalizedName}, ${city.AdministrativeArea.ID}`,
        value: city.LocalizedName
      }));
      const currentCity = yield data.filter(
        city =>
          city.LocalizedName === props.payload.cityValue &&
          city.AdministrativeArea.ID === props.payload.idValue
      )[0];

      yield put(
        getCitiesSuccess({
          cities: citiesArray,
          currentCity: currentCity,
          value: props.payload.value
        })
      );
    } catch (error) {
      yield put(getCitiesError({ value: props.payload.value }));
    }
  } else {
    yield put(emptyCityValue({ value: props.payload.value }));
  }
}

function* actionWatcher() {
  yield takeLatest("CITIES_RECEIVED", fetchCities);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
