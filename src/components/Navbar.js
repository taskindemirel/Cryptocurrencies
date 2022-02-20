import "./Navbar.css";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <Link to="/">
        <div className="navbar">
          <FaCoins className="icon" />
          <h1>
            Crypt<span className="purple">Crr</span>{" "}
          </h1>
        </div>
      </Link>
      <p>
        developed by <span className="td">Taşkın Demirel</span>{" "}
      </p>
    </div>
  );
};

export default Navbar;
