import React from "react";

const Grid_Section = () => {
  return (
    <section className="grid_section">
      <div id="card">
        <div className="card_body">
          <h1 className="background_text">A</h1>
          <div className="text_section">
            <h2 className="h24">
              One million single use plastic bottles are thrown out every
              minute!
            </h2>
          </div>
        </div>
      </div>
      <div className="grid_image image1"></div>

      <div id="card">
        <div className="card_body">
          <h1 className="background_text">C</h1>
          <div className="text_section">
            <h2 className="h24">
              How to live sustainably during a pandemic. Read More.
            </h2>
          </div>
        </div>
      </div>
      <div className="grid_image image2"></div>
      <div id="card">
        <div className="card_body">
          <h1 className="background_text">B</h1>
          <div className="text_section">
            <h2 className="h24">
              The Plastic free year Challenges is Here. REGISTER NOW!
            </h2>
          </div>
        </div>
      </div>
      <div className="grid_image image3"></div>
    </section>
  );
};

export default Grid_Section;
