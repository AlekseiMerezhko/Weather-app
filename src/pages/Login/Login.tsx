import React from "react";
import { useHistory } from "react-router-dom";
import { LoginForm, LoginSchema } from "../../components/Forms/LoginForm/index";
import RenderForm from "../../components/Forms/RenderForm";

interface Props {
  history: any;
  location: any;
  match: any;
  staticContext: any;
  logined: boolean;
  users: [{ username: string; password: string }];
  login: () => void;
  logout: () => void;
}

type user = {
  username: string;
  password: string;
};

const Login = (props: Props) => {
  console.log(props);
  const history = useHistory();
  const initialValues = { username: "", password: "" };
  const onSubmit = (values: user) => {
    const user = props.users.find(
      (user: user) => user.username === values.username
    );
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
