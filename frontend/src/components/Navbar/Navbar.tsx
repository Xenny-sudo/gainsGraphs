import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
      <header>
          <div className="logo">{/* This should be a link that when clicked takes you back to home page  */}
              {/* <img src={logo} alt="GainsGraph Logo" /> */}
          </div>            
          <nav>
              <span className="navbar-item">Home</span>
              <span className="navbar-item">Exercises</span>
              <span className="navbar-item">Routines</span>
              {/* <Link to='/'>Food</Link> */}
              {/* <Link to='/'>Weight</Link> */}
              <span className="navbar-item">Settings</span>
              <span className="navbar-item">Log Out</span>
          </nav>            
      </header>
  );
}