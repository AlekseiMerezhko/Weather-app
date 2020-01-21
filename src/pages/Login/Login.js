import React from "react";
import { useHistory } from "react-router-dom";
const Login = props => {
  const history = useHistory();
  return (
    <div className="flex justify-center">
      {props.logined ? (
        <div>
          <button
            className="btn bg-red-500 text-white p-2 rounded"
            onClick={() => props.logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            className="btn bg-blue-500 text-white p-2 rounded"
            onClick={() => {
              props.login();
              history.push("/");
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default Login;
