import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const Header = props => {
  const classes = useStyles();
  const history = useHistory();
  const [isExpanded, toggleExpansion] = useState(false);
  const { currentUser } = props.user;
  return (
    <div className={classes.root}>
      {props.cities.loading ? <LinearProgress /> : null}
      <nav className="flex items-center justify-between  flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Weather App
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            style={{
              transform: isExpanded ? "rotate(180deg)" : null,
              transition: "transform 0.5s ease-in-out"
            }}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {props.logined ? (
          <div
            style={{
              transition: "all 0.5s ease-in-out"
            }}
            className={`${
              isExpanded ? `max-h-screen opacity-100` : `max-h-0 opacity-0`
            } h-full w-full block flex-grow lg:flex md:opacity-100 lg:items-center lg:w-auto`}
          >
            <div className="text-xl lg:flex-grow flex lg:flex-row flex-col items-center">
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/"
              >
                Home
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/forecast"
              >
                Forecast
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/users"
              >
                Users
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/articles"
              >
                Articles
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/react-window-table"
              >
                Table
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/dragAndDrop"
              >
                DnD
              </Link>
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
                to="/grid"
              >
                Grid
              </Link>
            </div>
            <div className="text-xl text-white text-center">
              <p>
                Hi,{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => history.push("/login")}
                >
                  {currentUser.name || ""}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-xl">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white lg:mr-4"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default connect(({ user, cities }) => ({ user, cities }))(Header);
