import React from "react";
import './Login.css'

const Login = (props) => {
  return props.trigger && (
    <div className="login-master-con">
      <div className="login-child">
        <h1>This is the Login page</h1>
      </div>
    </div>
  );
};
export default Login;
