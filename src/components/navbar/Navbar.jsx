import "./navbar.scss";
import logo from "../../resources/okofoteelogo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <div className="info-section">
          <Link to="/" style={{ "text-decoration": "none" }}>
            <div className="home">Home</div>
          </Link>

          <Link to="/accomodations" style={{ "text-decoration": "none" }}>
            <div className="accomodation">Accomodation and facilities</div>
          </Link>
          <Link
            to="/rules-and-regulations"
            style={{ "text-decoration": "none" }}
          >
            <div className="rules">Rules and regulations</div>
          </Link>
        </div>

        <div className="button-section">
          <button className="request-a-visit">Request A Visit</button>
          <Link to="/register">
            <button className="book-your-room">Book Your Room</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
