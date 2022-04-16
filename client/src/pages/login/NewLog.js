import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const NewLog = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleClickCreateAccount = (e) => {
        navigate("/register");
    };

    const handleLogin = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login', user, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Friendsbook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Friendsbook.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleLogin}>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={user.email}
                            placeholder="Email"
                            className="loginInput"
                        />
                        <input
                            required
                            type="password"
                            name="password"
                            onChange={handleChange}
                            minLength="6"
                            value={user.password}
                            placeholder="Password"
                            className="loginInput"
                        />

                        <button className="loginButton" type="submit" >Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <hr />
                        <button onClick={handleClickCreateAccount} className="loginRegisterButton">Create A New Account</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewLog