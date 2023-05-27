import React from "react";
import { Card } from "./Card";
import r1 from "../../assets/images/recomandation/r_1.png";
import r2 from "../../assets/images/recomandation/r_2.png";
import r3 from "../../assets/images/recomandation/r_3.png";

export const Recomandation = () => {
  return (
    <>
      <section id="recomandation">
        <h1 className="r_heading">
          Recommendations <span>_</span>
        </h1>
        <div className="cards">
          <Card r_img={r1} heading={"Monaco Green"} text={"P  ureV"} />
          <Card r_img={r2} heading={"Obsidian Pearl"} text={"FilterV"} />
          <Card r_img={r3} heading={"Pure Snoe"} text={"JugV"} />
        </div>
      </section>
      <hr id="r_line" />
    </>
  );
};
