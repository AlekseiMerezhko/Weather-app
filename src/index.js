import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { LastLocationProvider } from "react-router-last-location";

import App from "./App";
import { store, persistor } from "./store/configureStore";

import "./css/index.css";
import "./css/tailwind.css";

ReactDOM.render(
  <BrowserRouter>
    <LastLocationProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </LastLocationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
