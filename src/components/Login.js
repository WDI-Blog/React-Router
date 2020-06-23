import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [txtUsername, setUsername] = useState("");
  const [txtPassword, setPassword] = useState("");

  function handleChangeUsername(e) {
    let username = e.target.value;
    setUsername(username);
  }

  function handleChangePassword(e) {
    let password = e.target.value;
    setPassword(password);
  }

  function onSubmit(e) {
    e.preventDefault();
    // console.log(txtUsername);
    // console.log(txtPassword);
    if (txtUsername === "user" && txtPassword === "pass") {
      localStorage.setItem(
        "login",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    } else {
      console.log("Something went wrong");
    }
    setUsername("");
    setPassword("");
  }

  var loggerUser = localStorage.getItem("login");
  if (loggerUser !== null) {
    let { location } = props;
    return (
      <Redirect
        to={{
          pathname: "/products",
          state: {
            from: location,
          },
        }}
      />
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <legend>Login Page</legend>
        <div className="form-group">
          <label>Username : </label>
          <input
            type="text"
            name="txtUsername"
            className="form-control"
            value={txtUsername}
            onChange={handleChangeUsername}
          />
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="password"
            name="txtPassword"
            className="form-control"
            value={txtPassword}
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
