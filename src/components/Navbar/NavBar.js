import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <ul className="topnav">
          <li>
            <NavLink activeClassName="active" to={"/GamesClub"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/games"}>
              Juegos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={"/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
