import "./App.css";
import { Router } from "@reach/router";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/login" default />
        <Registration path="/register" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
