import React from "react";
import { useHistory } from "react-router-dom";
import { LoginForm, LoginSchema } from "../../components/Forms/LoginForm/index";
import RenderForm from "../../components/Forms/RenderForm";
const Login = props => {
  const history = useHistory();
  const initialValues = { username: "", password: "" };
  const onSubmit = values => {
    const user = props.users.find(user => user.username === values.username);
    if (user && user.password === values.password) {
      props.login();
      history.push("/");
    } else {
      return;
    }
  };
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
          <RenderForm
            renderForm={LoginForm}
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
            initialValues={initialValues}
          />
        </div>
      )}
    </div>
  );
};
export default Login;
