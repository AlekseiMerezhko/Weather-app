import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header";
import Forecast from "./pages/Forecast";
import Home from "./pages/Home";
import Users from "./pages/Users";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="m-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/forecast">
            <Forecast />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
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
// export default connect(mapStateToProps)(App);
export default App;
