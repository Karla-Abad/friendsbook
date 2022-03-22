import React, { useState } from "react";
import { navigate } from "@reach/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>friendsbook</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <hr />
        <button onClick={(e) => navigate("/register")}>Create Account</button>
      </form>
    </div>
  );
};

export default Login;
