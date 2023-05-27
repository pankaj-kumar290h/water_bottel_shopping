import React from "react";
import "./style.css";
import { Wave } from "../wave/Wave";
import links_icon from "../../assets/images/links.png";
const Footer = () => {
  return (
    <div id="footer">
      <section>
        <ul>
          <li className="footer_heading">Help</li>
          <li>FAQ</li>
          <li>Review</li>
          <li>My Account</li>
          <li>Coporate</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li className="footer_heading">Shop</li>

          <li>PureV</li>
          <li>Gifts</li>
          <li>Trael set</li>
          <li>Accessories</li>
        </ul>
        <ul>
          <li className="footer_heading">About</li>
          <li>Magazin</li>
          <li>Press</li>
          <li>Our Story</li>
          <li>Tech</li>
        </ul>
        <div className="email">
          <h2>Sign up for newsletter</h2>
          <div>
            <input placeholder="Enter your Email" /> <button>SIGN UP</button>
          </div>
        </div>
      </section>
      <section id="footer_copywrite">
        <div>
          <p>Copyright Arachnomesh 2022</p>
        </div>
        <div>
          <img src={links_icon} alt="links" />
        </div>
        <div>
          <p>T&C</p>
          <p>Privacy Policy</p>
        </div>
      </section>
      <div id="wave_section">
        <Wave />
      </div>
    </div>
  );
};

export default Footer;
