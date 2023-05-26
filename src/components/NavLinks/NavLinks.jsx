import "./NavLinks.css";
import { NavLink } from "react-router-dom";
function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink
          to="/movies"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          contacts
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
