import axios from "axios";
import { useRef } from "react";
import "./register.css"
import {useNavigate} from "react-router-dom"

export default function Register() {
    const username = useRef();
    const email = useRef(); 
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Passwords must match!!");
        }else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                confirmPassword: confirmPassword.current.value
            };
        axios
        .post("http://localhost:8000/api/users/register", user)
        .then(res => {
            console.log(res.data);
            navigate("/login")
        })
        .catch(err => {
            console.log(err);
            
        })
        }
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Register</h3>
                <span className="loginDesc">Its fast and easy.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleRegistration}>
                    <input placeholder="Username" required ref={username} className="loginInput" />
                    <input type="email" placeholder="Email" required ref={email} className="loginInput" />
                    <input type="password" minLength="6" placeholder="Password" required ref={password} className="loginInput" />
                    <input type="password" placeholder="Confirm Password" required ref={confirmPassword} className="loginInput" />
                    <button type="submit" className="loginButton">Register</button>
            
                </form>
            </div>
        </div>
    </div>
  )
}
