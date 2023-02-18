import React from "react";
import "../styles/Home.css";
import {
  AiOutlineFacebook,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <div id="Home">
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
            <a href="#!" className="login-btn">
              Login
            </a>
            <a href="#!" className="login-btn">
              Register
            </a>
          </div>

          {/* <span>Or via Social Media</span>

          <div className="via-social">
            <a href="#!">
              <AiFillGoogleCircle />
            </a>
            <a href="#!">
              <AiOutlineFacebook />
            </a>
            <a href="#!">
              <AiFillInstagram />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
