import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/bookmark" className="navLink">
          Bookmark
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
