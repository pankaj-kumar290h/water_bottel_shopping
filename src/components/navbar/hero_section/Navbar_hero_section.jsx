import React from "react";
import "./style.css";
export const Navbar_hero_section = () => {
  return (
    <div className="navbar_hero">
      <h1 className="logo">ARACHNOMESH</h1>
      <section className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Bottles</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="button_hero">Login</button>
      </section>
    </div>
  );
};
