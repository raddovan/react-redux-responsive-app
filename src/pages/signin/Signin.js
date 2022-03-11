import React from "react";
import "./index.css";
import { useNavigate } from "react-router";

const Signin = () => {
  let navigate = useNavigate();
  const goto = () => {
    navigate("/");
  };
  return (
    <div className="section">
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form>
            <div className="inputBx">
              <span>Username</span>
              <input type="text" name="" />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input type="password" name="" autoComplete="new-password" />
            </div>

            <div className="inputBx">
              <input
                type="submit"
                value="Sign in"
                onClick={() => goto()}
                name=""
              />
            </div>
            <div className="inputBx">
              <p>
                Don't have account? <a href="/#">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="imgBx"></div>
    </div>
  );
};

export default Signin;
