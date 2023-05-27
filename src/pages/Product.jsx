import React from "react";
import Footer from "../components/footer/Footer";
import { Recomandation } from "../components/recomandation/Recomandation";
import { Navbar_product_section } from "../components/navbar/product_section/Navbar_prodect_section";
import Bottle_filtered from "../components/boottle_filtered/Bottle_filtered.jsx";
export const Product = () => {
  return (
    <>
      <Navbar_product_section />
      <hr />
      <Bottle_filtered />
      <Recomandation />
      <Footer />
    </>
  );
};
