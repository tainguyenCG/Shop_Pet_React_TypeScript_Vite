import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/DogsPage" className={({ isActive }) => (isActive ? "active" : "")}>
          Dogs
        </NavLink>
        <NavLink to="/Cart" className={({ isActive }) => (isActive ? "active" : "")}>
          My Cart
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
