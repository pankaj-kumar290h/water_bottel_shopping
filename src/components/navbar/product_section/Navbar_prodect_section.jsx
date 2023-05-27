import React from "react";
import "./style.css";
import { BsPerson, BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
export const Navbar_product_section = () => {
  return (
    <div className="navbar_hero product_navbar">
      <h1 className="logo">ARACHNOMESH</h1>
      <section className="links">
        <ul>
          <li>Products</li>
          <li>Technology</li>
          <li>
            <BsPerson />
          </li>
          <li>
            <AiOutlineHeart />
          </li>
          <li>
            <BsCart2 />
          </li>
        </ul>
      </section>
    </div>
  );
};
