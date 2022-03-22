import React, { useState } from "react";
import { navigate } from "@reach/router";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [confirmReg, setConfirmReg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register</h1>
      <h4>Its fast and easy.</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Genre</p>
        <div>
          <input type="radio" name="female" />
          <label>Female</label>
          <input type="radio" name="male" />
          <label>Male</label>
          <input type="radio" name="customized" />
          <label>Customized</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
