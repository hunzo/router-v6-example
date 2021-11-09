import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand-title">Brand Name</div>
      <div
        className="toggle-button"
        onClick={() => {
          const NavLinks = document.getElementsByClassName("navbar-links")[0];
          NavLinks.classList.toggle("active");
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/compose">Compose</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
