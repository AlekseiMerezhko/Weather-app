import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "file-loader?name=firebase-messaging-sw.js./firebase-messaging-sw.js";

import Forecast from "./pages/Forecast";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import ReactWindowTable from "./pages/ReactWindowTable";
import NoMatch from "./pages/NoMatch";
import DragAndDrop from "./pages/DragAndDrop";
import Grid from "./pages/Grid";
import ReactWindowTableComponent from "./pages/ReactWindowTable/ReactWindowTableComponent";
import { PrivateRoute } from "./hoc/PrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  HOME,
  FORECAST,
  USERS,
  ARTICLES,
  REACT_WINDOW_TABLE,
  REACT_WINDOW_TABLE_COMPONENT,
  NO_MATCH,
  DRAGANDDROP,
  GRID
} from "./const/routes";
interface Props {
  logined: boolean;
  users: [{ username: string; password: string }];
  dispatch: void;
}
function App(props: Props) {
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
              path={HOME}
              component={Home}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={FORECAST}
              component={Forecast}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={USERS}
              component={Users}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={ARTICLES}
              component={Articles}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={REACT_WINDOW_TABLE}
              component={ReactWindowTable}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={REACT_WINDOW_TABLE_COMPONENT}
              component={ReactWindowTableComponent}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={DRAGANDDROP}
              component={DragAndDrop}
            />
            <PrivateRoute
              logined={props.logined}
              exact
              path={GRID}
              component={Grid}
            />

            <Route path={NO_MATCH} component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default connect(({ login }: { login: any }) => login)(App);
