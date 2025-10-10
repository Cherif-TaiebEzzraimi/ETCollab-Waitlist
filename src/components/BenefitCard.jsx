import React from "react";

const BenefitCard = ({ benefit }) => (
  <div className="benefits-card">
    <div className="benefits-icon">
      <img src={benefit.image} alt={benefit.title} className="benefits-image" />
    </div>
    <h3 className="benefits-card-title">{benefit.title}</h3>
    <ul className="benefits-list">
      {benefit.benefits.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default BenefitCard;
