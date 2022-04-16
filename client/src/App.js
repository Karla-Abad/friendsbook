// import { Person } from "@material-ui/icons";
// import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewReg from "./pages/register/NewReg";
import NewLog from "./pages/login/NewLog";
import NewProfile from "./pages/profile/NewProfile";


// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

const App = () => {
  // const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLog />} exact />
        <Route path="/register" element={<NewReg />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:username" element={<NewProfile />} />


        {/* <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        /> */}


      </Routes>
    </BrowserRouter>
    //Logic for routes:
    // If there is a user logged in, you can go to your Home page, otherwise will be redirected to Login page. - Karla
  );
};

export default App;
