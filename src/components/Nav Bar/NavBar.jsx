import "./NavBar.css";

import { faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, Navigate } from "react-router-dom";

function NavBar() {
  return (
    <header className="header-container">
      <div className="nav-bar-container">
        <Link to="/" className="link-container">
          <h3>WatchWorld</h3>
        </Link>

        <div className="search-container">
          <input
            type="search"
            placeholder="search for products"
            className="input-search"
          />
        </div>
        <ul className="navbar-unordered-list">
          <li>
            <FontAwesomeIcon icon={faHeart} size="xl" />
          </li>
          <li>
            <FontAwesomeIcon icon={faHouse} size="xl" />
          </li>
          <li>
            <button className="login-btn">login</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default NavBar;
