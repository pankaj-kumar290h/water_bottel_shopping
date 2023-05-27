import React from "react";
import "./style.css";
import img2 from "../../assets/images/tesmonial/p_2.png";
import img1 from "../../assets/images/tesmonial/p_1.png";
import img3 from "../../assets/images/tesmonial/p_3.png";
import coma from "../../assets/images/tesmonial/coma.png";

import b1 from "../../assets/images/tesmonial/1_1.png";
export const Testimonials = () => {
  return (
    <section id="testmonial">
      <h1>
        TESTIMONIALS <span>_</span>
      </h1>
      <div id="testmonial_card_section">
        <div className="t_card small">
          <div className="card_body">
            <img className="b1" src={b1} alt="b1" />
            <img className="t_profile_image" src={img1} alt="p2" />
            <div className="text">
              <p>
                Say goodbye to your reusable bottles persistent funk — and hello
                to this Jetsons-worthy update. My only regret is that I didn't
                here about this for my first 3 purchases. They did a great job!!
              </p>
              <div className="editor">
                <img className="coma" src={coma} alt="coma" />
                <div>
                  <p className="first">Austin Wad</p>
                  <p className="second"> Athelete</p>
                </div>
                <h3>ADIDAS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="t_card">
          <div className="card_body">
            <img className="t_profile_image" src={img2} alt="p2" />
            <div className="text">
              <p>
                Say goodbye to your reusable bottles persistent funk — and hello
                to this Jetsons-worthy update. My only regret is that I didn't
                here about this for my first 3 purchases. They did a great job!!
              </p>
              <div className="editor">
                <img className="coma" src={coma} alt="coma" />
                <div>
                  <p className="first">Jaydon Bator</p>
                  <p className="second"> Sr. Edito</p>
                </div>
                <h3>OPRAH MAGAZINE</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="t_card small">
          <div className="card_body">
            <img className="t_profile_image" src={img3} alt="p2" />
            <div className="text">
              <p>
                Say goodbye to your reusable bottles persistent funk — and hello
                to this Jetsons-worthy update. My only regret is that I didn't
                here about this for my first 3 purchases. They did a great job!!
              </p>
              <div className="editor">
                <img className="coma" src={coma} alt="coma" />
                <div>
                  <p className="first">Sarah</p>
                  <p className="second"> Photographer</p>
                </div>
                <h3>BBC</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
