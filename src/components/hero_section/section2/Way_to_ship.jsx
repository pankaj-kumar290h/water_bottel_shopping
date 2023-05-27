import React, { useRef } from "react";
import "./style.css";
import { motion } from "framer-motion";
import image1 from "../../../assets/images/bottles/1.png";
import image2 from "../../../assets/images/bottles/2.png";
import image3 from "../../../assets/images/bottles/3.png";
import image4 from "../../../assets/images/bottles/4.png";
export const Way_to_ship = () => {
  const scrollRef = useRef(null);
  return (
    <motion.section id="way_to_ship">
      <div>
        <div className="images_bottels">
          <motion.img
            initial={{ x: -100, y: 100, rotate: 30 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ root: scrollRef }}
            className="img1"
            src={image1}
            alt="image 1"
          />
          <motion.img
            initial={{ x: 100, y: -100, rotate: 30 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ root: scrollRef }}
            className="img2"
            src={image2}
            alt="image 1"
          />
          <motion.img
            initial={{ x: -100, y: 100, rotate: 30 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ root: scrollRef }}
            className="img3"
            src={image3}
            alt="image 1"
          />
          <motion.img
            initial={{ x: 100, y: -100, rotate: 30 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ root: scrollRef }}
            className="img4"
            src={image4}
            alt="image 1"
          />
          <div className="bottel_text">
            <h1>A smart way to sip</h1>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
