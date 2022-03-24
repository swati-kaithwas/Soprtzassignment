import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="mane_div">
      <div className="div_1">
        <h2>PLAYER</h2>
      </div>
      <div className="div_2">
        <ol>
          <li>Skill</li>
          <li>Name</li>
          <li> Games</li>
        </ol>
      </div>
      <div className=" search_box">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};
