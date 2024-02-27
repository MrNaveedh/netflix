import React from "react";
import "./Nav.css";
import Search from "../Search/Search";
function Nav() {
  return (
    <div className="Nav">
      <div className="Nav_logo">
        <img
          className="logo_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
      </div>
      <ul className="Nav_links">
        <li className="Nav_link">Home</li>
        <li className="Nav_link">Tv Shows</li>
        <li className="Nav_link">Movies</li>
        <li className="Nav_link">Latest</li>
        <li className="Nav_link">My list</li>
      </ul>
      <Search />
    </div>
  );
}

export default Nav;
