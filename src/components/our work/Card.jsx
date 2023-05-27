import React from "react";

export const Card = ({ number, heading, text, img, aline }) => {
  return (
    <div id="card">
      <div className="card_body">
        <h1 className="background_text">{number}</h1>
        <div className="text_section">
          <h2>
            {heading.split(" ")[0]}
            <br />
            {heading.split(" ")[1]}
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
