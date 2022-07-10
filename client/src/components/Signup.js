import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Signup() {
  const [user, setUser] = useOutletContext("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        first_name,
        last_name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div class="login-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>SIGNUP</h3>
            <p>
              Please provide all required details to register for an account
              with us.
            </p>
          </div>
        </div>
        <form class="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="first_name"
            autoComplete="off"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="last_name"
            placeholder="Last Name"
            autoComplete="off"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            id="Email"
            placeholder="Email Address"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            id="password_confirmation"
            placeholder="Password Confirmation"
            autoComplete="off"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button type="submit">Signup</button>
          {/* <p class="message">
            Not registered? <a href="/signup">Create an account</a>
          </p> */}
          {user}
        </form>
        {/* {error ? <div>{error}</div> : null} */}
      </div>
    </div>
  );
}

export default Signup;
