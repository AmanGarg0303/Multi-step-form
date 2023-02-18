import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/Auth.css";

const Auth = () => {
  return (
    <div id="Auth" className="show">
      <a href="#!" className="close">
        X
      </a>

      <div className="content">
        {/* <LoginForm /> */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default Auth;
