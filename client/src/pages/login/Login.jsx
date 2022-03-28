import "./login.css"
import React, {useContext, useRef} from 'react';
import { loginCall } from "../../serverCalls";
import { AuthContext } from "../../context/AuthContext";


export default function Login() {

    //using useRef instead of useState to prevent re-rendering every time we are changing the input field - Karla
    const email = useRef(); 
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email.current.value);
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    }

    console.log(user)

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
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <hr/>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
