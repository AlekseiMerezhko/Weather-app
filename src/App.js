import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Forecast from "./pages/Forecast";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import { PrivateRoute } from "./hoc/PrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen">
        <Header logined={props.logined} />
        <main id="main" className="m-5 flex-grow">
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
            <PrivateRoute
              logined={props.logined}
              exact
              path="/articles"
              component={Articles}
            />
            <Route path="*" component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default connect(({ login }) => login)(App);
