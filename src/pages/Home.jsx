import React from "react";
import "../styles/Home.css";

const Home = ({ isAuth, setIsAuth }) => {
  return (
    <div id="Home" className={`${isAuth.open ? "active" : ""}`}>
      <div className="container">
        <div className="img">
          <img
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"
            alt=""
          />
        </div>

        <div className="text-btns">
          <p>Hello, login from here</p>
          <div className="btns">
            <a
              href="#!"
              className="login-btn"
              onClick={() => setIsAuth({ open: true, form: "login" })}
            >
              Login
            </a>
            <a
              href="#!"
              className="login-btn"
              onClick={() => setIsAuth({ open: true, form: "register" })}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
