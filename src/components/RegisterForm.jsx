import React, { useState } from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";

const RegisterForm = () => {
  const [currIndex, setCurrIndex] = useState(0);

  function plusIndex(n) {
    setCurrIndex((prev) => prev + n);
  }

  const handleNext = (e) => {
    e.preventDefault();
    plusIndex(1);
  };

  return (
    <div className="register">
      <strong>Sign Up</strong>

      {/* Progress Bar  */}
      <div className="progress-bar">
        <ul>
          <div
            className="progress"
            style={{ width: `calc(100% / 3 * ${currIndex})` }}
          />
          {["Name", "Contact", "Birth", "Submit"].map((item, i) => (
            <li
              key={item}
              data-title={item}
              className={`${currIndex >= i ? "active" : ""}`}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* pages  */}
      <div className="wrapper" style={{ marginLeft: `${currIndex * -100}%` }}>
        {/* Basic Info  */}
        <form onSubmit={handleNext}>
          <label>
            First Name <span>*</span>
          </label>
          <div className="input-group">
            <FaUser
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
            <input type="tet" required />
          </div>

          <label>
            Last Name <span>*</span>
          </label>
          <div className="input-group">
            <FaUser
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
            <input type="text" required />
          </div>

          <div className="btns">
            <button type="submit">Next</button>
          </div>
        </form>

        {/* Email and Contact Info  */}
        <form onSubmit={handleNext}>
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
            Phone Number <span>*</span>
          </label>
          <div className="input-group">
            <FiPhoneOutgoing
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
            <input type="number" required />
          </div>

          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* DOB and gender */}
        <form onSubmit={handleNext}>
          <label>
            DOB <span>*</span>
          </label>
          <div className="input-group">
            <MdDateRange
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
            <input type="date" required />
          </div>

          <label>
            Gender <span>*</span>
          </label>
          <div className="input-group">
            {/* <FaUser
              size={10}
              style={{
                width: "40px",
                height: "40px",
                padding: "6px",
                color: "#555",
                margin: "auto",
                borderRight: "1px solid #acacac",
              }}
            /> */}
            {/* <input type="number" required /> */}
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        </form>

        {/* Username and password  */}
        <form onSubmit={handleNext}>
          <label>
            Username <span>*</span>
          </label>
          <div className="input-group">
            <FaUser
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
            <input type="Password" required />
          </div>

          <div className="btns">
            <button type="button" onClick={() => plusIndex(-1)}>
              Prev
            </button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
