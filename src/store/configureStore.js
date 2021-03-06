import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "cities", "login", "articles"] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
  // Change thunk to sagaMiddleware for using saga
);

// sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { persistor, store };
