import React, { useState } from "react";
import bottel from "../../assets/images/product/p_bottel.png";
import cap from "../../assets/images/product/p_cap.png";
import image2 from "../../assets/images/product/l-2.png";
import image3 from "../../assets/images/product/l-3.png";
import video from "../../assets/images/product/p_video.png";
import cap_2 from "../../assets/images/product/l_cap.png";
import "./product_image.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
export const Product_Image_section = () => {
  return (
    <>
      <div id="crousole_image">
        <div id="c_section_slider">
          <p className="arrow a_left">
            <AiOutlineArrowLeft />
          </p>
          <p className="arrow a_rigth">
            <AiOutlineArrowRight />
          </p>
          <div className="main">
            <img className="main_image_cap" src={cap} alt="cap" />
            <img className="main_image_bottel" src={bottel} alt="bottel" />
          </div>
        </div>
        <div className="other_images">
          <div className="c_image_div">
            <img loading="lazy" className="c_image" src={bottel} alt="" />
          </div>
          <div className="c_image_div">
            <img loading="lazy" className="c_image" src={image2} alt="" />
          </div>
          <div className="c_image_div">
            <img loading="lazy" className="c_image" src={image3} alt="" />
          </div>
          <div className="c_image_div">
            <img
              loading="lazy"
              className="c_image c_image_cap"
              src={cap_2}
              alt=""
            />
          </div>
          <div className="c_image_div">
            <img loading="lazy" className="c_image" src={video} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
