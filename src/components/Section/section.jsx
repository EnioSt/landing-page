import React from "react";
import "./section.css";

const Section = ({ title, text, image, id }) => {
  return (
    <section id={id} className="section">
      <div className="section-content">
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default Section;
