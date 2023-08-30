import { NavLink } from "react-router-dom";
import { useContext } from "react";

import "./NavLinks.css";
import AuthContext from "../../context/auth-context";

const NavLinks = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/u1/places">My Places</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/places/new">Add Place</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/logout" onClick={logout}>
            Logout
          </NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;
