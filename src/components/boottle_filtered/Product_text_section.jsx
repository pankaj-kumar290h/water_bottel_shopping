import React, { useState } from "react";
import "./Product_text.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import visa from "../../assets/images/cards/visa.png";
import mastrcard from "../../assets/images/cards/master-card.png";
import paypal from "../../assets/images/cards/pay-pal.png";
const Product_text_section = () => {
  const [insulat, setInsulated] = useState(true);
  const [Value, setValue] = useState("black");
  const changeVlaue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleClick = () => {
    setInsulated(!insulat);
  };
  return (
    <section id="product_text">
      <div>
        <div id="price_section">
          <p className="price">$150.00</p>
          <p className="price-cut"> $300.00</p>
          <p className="discount">-50%</p>
        </div>
      </div>
      <div className="color">
        <div id="color_selector">
          <p>Color</p>
          <form onChange={changeVlaue}>
            <input
              style={{ accentColor: "black" }}
              type="radio"
              value={"black"}
              name="black"
              checked={Value == "black" ? true : false}
            />
            <input
              style={{ accentColor: "white" }}
              type="radio"
              value={"white"}
              name="white"
              checked={Value == "white" ? true : false}
            />
            <input
              style={{
                accentColor: "green",
              }}
              type="radio"
              value={"green"}
              name="green"
              checked={Value == "green" ? true : false}
            />
            <p style={{ display: "inline-block" }}>{Value}</p>
          </form>
        </div>
        <div className="insulted">
          <p onClick={handleClick} className={insulat ? "selected" : ""}>
            {insulat && <input type="radio" checked />}
            Insulated
          </p>
          <p onClick={handleClick} className={!insulat ? "selected" : ""}>
            {!insulat && <input type="radio" checked />}
            non-Insulated
          </p>
        </div>
      </div>
      <div>
        <p>Size</p>
        <select>
          <option value="17">17 OZ</option>
          <option value="24">24 OZ</option>
        </select>
      </div>
      <div className="number_button">
        <input
          className="number_input"
          min={1}
          type="number"
          defaultValue={1}
          placeholder="1"
        />
        <button className="add_to_cart">
          <BsCart2 className="cart_icon icon" />
          Add to cart
        </button>
        <button className="Favourite">
          <AiOutlineHeart className="heart_icon icon" />
          Favourite
        </button>
      </div>
      <p className="lable"> Delivery</p>
      <p>
        Free standard shipping oeder over $35 before tax, plus free returns.
      </p>
      <table>
        <tbody>
          <tr>
            <th>TYPE</th>
            <th>HOW LONG</th>
            <th>HOW MUCH</th>
          </tr>

          <tr>
            <td>Standard delivery</td>
            <td>1-4 business days</td>
            <td>$4.50</td>
          </tr>
          <tr>
            <td>Express delivery</td>
            <td>1 business day</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Pick up in store</td>
            <td>1-3 business days</td>
            <td>Free</td>
          </tr>
        </tbody>
      </table>
      <p className="lable">Return</p>
      <p>
        You have 15 days to return the item(s) using any of the following
        methods:
      </p>
      <ul className="list">
        <li>Free store return</li>
        <li>Free returns via USPS Dropoff Service</li>
      </ul>
      <hr />
      <div id="cards">
        <img src={visa} alt="visa" />
        <img src={mastrcard} alt="master-card" />
        <img src={paypal} alt="pay-pal" />
      </div>
    </section>
  );
};

export default Product_text_section;
