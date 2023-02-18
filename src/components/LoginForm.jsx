import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { AiFillLock } from "react-icons/ai";

const LoginForm = () => {
  return (
    <div className="login">
      <strong>Sign In</strong>

      <form>
        <label>
          Email <span>*</span>
        </label>
        <div className="input-group">
          <TbBrandTelegram
            size={10}
            style={{
              width: "40px",
              height: "40px",
              padding: "6px",
              color: "#555",
              margin: "auto",
              borderRight: "1px solid #acacac",
            }}
          />
          <input type="email" required />
        </div>

        <label>
          Password <span>*</span>
        </label>
        <div className="input-group">
          <AiFillLock
            size={10}
            style={{
              width: "40px",
              height: "40px",
              padding: "6px",
              color: "#555",
              margin: "auto",
              borderRight: "1px solid #acacac",
            }}
          />
          <input type="password" required />
        </div>

        <div className="btns">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
