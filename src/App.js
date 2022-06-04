import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (

    <div className="App">
    <nav className="nav">
      <Link className="nav-button" to="/">Home</Link>
      <Link className="nav-button" to="/countdowntimer">Countdown Timer</Link>
    </nav>
    <Outlet />
    </div>
  );
}

export default App;
