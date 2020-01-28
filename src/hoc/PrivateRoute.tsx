import React from "react";
import { Redirect, Route } from "react-router-dom";

type Component = any;
export const PrivateRoute = ({ component: Component, ...rest }: Component) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.logined ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
