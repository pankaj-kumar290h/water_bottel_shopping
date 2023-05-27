import React from "react";
import "./style.css";
export const Card = ({ r_img, heading, text }) => {
  return (
    <div id="r_card">
      <div className="r_card_body">
        <div className="r_img">
          <div className="r_img_text">
            <p className="heading">Select Size :</p>
            <div className="r_img_text_p">
              <div>
                <p>17 OZ</p>
              </div>
              <div>
                <p>25 OZ</p>
              </div>
            </div>
          </div>
          <img src={r_img} alt="r1" />
        </div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
