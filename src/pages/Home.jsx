import React from "react";
import { Our_work_section } from "../components/our work/Our_work_section";
import { Navbar_hero_section } from "../components/navbar/hero_section/Navbar_hero_section";
import Footer from "../components/footer/Footer";
import { Hero_section } from "../components/hero_section/Hero_section";
import { Way_to_ship } from "../components/hero_section/section2/Way_to_ship";
import { Testimonials } from "../components/testtimonials/Testimonials";

const Home = () => {
  return (
    <main id="main">
      <section className="snap snap1">
        <Navbar_hero_section />
        <Hero_section />
      </section>
      <section className="snap">
        <Way_to_ship />
      </section>
      <section className="snap">
        <Our_work_section />
      </section>
      <section className="snap">
        <Testimonials />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
