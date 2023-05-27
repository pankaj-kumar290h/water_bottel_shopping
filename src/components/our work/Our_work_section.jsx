import React from "react";
import "./style.css";
import { Card } from "./Card";
import Grid_Section from "./Grid_Section";

export const Our_work_section = () => {
  return (
    <>
      <section id="our_work">
        <h1 id="our_work_text">
          OUR WORK <span>_</span>
        </h1>
        <Card
          number="01"
          heading="Get Inspired"
          text="Satisfy all of your inspiration need in one place"
        />
        <Card
          number="02"
          heading="Nano Zero-Filtration"
          text="Satisfy all of your inspiration need in one place"
        />
        <Card
          number="03"
          heading="PureV Technology"
          text="Proprietary PureV™ technology improves the quality of your water by preventing water."
        />
        <Card
          number="04"
          heading="Self-Cleaning Worry-Free"
          text="Neutralizes up to 99%* of bacteria such as E.coli using PureV technology."
        />
      </section>
      <Grid_Section />
    </>
  );
};
