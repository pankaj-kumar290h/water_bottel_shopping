import React from "react";
import "./style.css";
import stars from "../../assets/images/star.png";
import { Product_Image_section } from "./Product_Image_section";
import Product_text_section from "./Product_text_section";
const Bottle_filtered = () => {
  return (
    <section id="bottel_filtered">
      <h1 className="r_heading">
        Bottle Filtred <span>_</span>
      </h1>
      <section id="review">
        <div className="filter">
          <ul>
            <li className="review_filter">General Info</li>
            <li className="review_filter">Product details</li>
            <li className="review_filter">Reviews</li>
          </ul>
        </div>
        <div className="start">
          <img src={stars} alt="rating" />
          <p>12 reviews</p>
        </div>
      </section>
      <hr />
      <section id="bottel_product_section">
        <Product_Image_section />
        <Product_text_section />
      </section>
    </section>
  );
};

export default Bottle_filtered;
