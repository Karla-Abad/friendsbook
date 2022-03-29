import "./login.css"
import React, {useContext, useRef} from 'react';
import { loginCall } from "../../serverCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core"
import axios from "axios";


export default function Login() {

    //using useRef instead of useState to prevent re-rendering every time we are changing the input field - Karla
    const email = useRef(); 
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    //line 12 is calling on the information we setup in our context folder with useReducer hook instead of passing through different components.

    const handleLogin = (e) => {
        e.preventDefault();
        // loginCall({email: email.current.value, password: password.current.value}, dispatch);
        dispatch({ type: "LOGIN_START" });
  console.log(user);
  axios
    .post(
      "http://localhost:8000/api/users/login",
      {
        email: email.current.value,
        password: password.current.value,
      }
      //   {
      //     withCredentials: true,
      //   }
    )
    .then((res) => {
      console.log(res, "res");
      console.log(res.data, "is res data!");
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      //   console.log(err.res);
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    });
        console.log(email.current.value);
        console.log(password.current.value);
    }

    console.log(`User is: ${user}`)

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Friendsbook</h3>
                <span className="loginDesc">Connect with friends and the world around you on Friendsbook.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleLogin}>
                    <input type="email" required ref={email} placeholder="Email" className="loginInput" />
                    <input type="password" required minLength="6" ref={password} placeholder="Password" className="loginInput" />
                    <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress style={{'color': 'white'}} size="20px"/>: "Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <hr/>
                    <button className="loginRegisterButton">{isFetching ? <CircularProgress style={{'color': 'white'}}  size="20px"/>: "Create A New Account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
