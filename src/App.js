import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header";
import Forecast from "./pages/Forecast";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";

import { PrivateRoute } from "./hoc/PrivateRoute";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header logined={props.logined} />
      <main id="main" className="m-5">
        <Switch>
          <Route exact path="/login" component={Login} />

          <PrivateRoute
            logined={props.logined}
            exact
            path="/"
            component={Home}
          />
          <PrivateRoute
            logined={props.logined}
            exact
            path="/forecast"
            component={Forecast}
          />
          <PrivateRoute
            logined={props.logined}
            exact
            path="/users"
            component={Users}
          />
          <Route path="*" component={NoMatch} />
        </Switch>
      </main>
    </div>
  );
}

// const mapStateToProps = store => {
//   return {
//     user: store.user
//   };
// };
export default connect(({ login }) => login)(App);
// export default App;
