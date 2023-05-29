import React from "react";
import "./style.css";
import cap from "../../assets/images/cap.png";
import bottel from "../../assets/images/bottel.png";
import { motion } from "framer-motion";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export const Hero_section = () => {
  const navigate = useNavigate();
  return (
    <section id="hero_section">
      <div id="main_cat_btn">
        <button onClick={() => navigate("/product")}>
          <BsCart2 id="m_cart" />
          Add to cart
        </button>
      </div>
      <motion.div
        id="hero_image"
        initial={{
          y: 0,
        }}
        animate={{ y: 130 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          initial={{
            y: -400,
          }}
          animate={{ y: 10 }}
          transition={{ duration: 2 }}
          className="cap"
        >
          <img src={cap} alt="cap" />
        </motion.div>
        <div className="bottel">
          <img src={bottel} alt="bottel" />
        </div>
      </motion.div>
      <motion.div
        id="circle"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        className="hero_text_section"
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <h1>
          Self Cleaning bottle <br />
          In 60 Seconds
        </h1>
        <p>
          Hit refresh with the intelligently clean bottle built for adventure.
        </p>
        <motion.div
          onClick={() => navigate("/product")}
          initial={{
            y: 150,
          }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <button className="button_hero text_button">KNOW MORE</button>
        </motion.div>
      </motion.div>
    </section>
  );
};
