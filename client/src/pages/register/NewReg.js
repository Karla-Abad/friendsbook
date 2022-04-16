import axios from "axios";
import { useState } from "react";
import "./register.css"
import { useNavigate } from "react-router-dom"


const NewReg = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleUserChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleRegistration = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/register", user, { withCredentials: true })
            .then(res => {
                console.log('iam here')
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Register</h3>
                        <span className="loginDesc">Its fast and easy.</span>
                    </div>
                    <div className="loginRight">
                        <form className="loginBox" onSubmit={handleRegistration}>

                            <input
                                required
                                type='text'
                                placeholder="Username"
                                onChange={handleUserChange}
                                value={user.username}
                                className="loginInput"
                                name="username" />

                            <input
                                required
                                type="email"
                                placeholder="Email"
                                onChange={handleUserChange}
                                value={user.email}
                                className="loginInput"
                                name="email" />

                            <input
                                required
                                type="password"
                                minLength="6"
                                placeholder="Password"
                                onChange={handleUserChange}
                                value={user.password}
                                className="loginInput"
                                name="password" />

                            <input
                                required
                                type="password"
                                placeholder="Confirm Password"
                                onChange={handleUserChange}
                                value={user.confirmPassword}
                                className="loginInput"
                                name="confirmPassword" />

                            <button type="submit" className="loginButton">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default NewReg