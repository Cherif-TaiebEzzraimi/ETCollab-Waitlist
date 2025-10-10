import React from "react";
import BenefitCard from "./BenefitCard";

const BENEFITS_DATA = [
  {
    id: 1,
    title: "For students",
    image: "/students.png",
    benefits: [
      "Skill Growth",
      "Teamwork experience", 
      "Portfolio pieces",
      "Possible payment for sponsor projects",
      "Networking & career opportunities"
    ]
  },
  {
    id: 2,
    title: "For sponsors",
    image: "/sponsors.png",
    benefits: [
      "Support innovation",
      "Gain brand visibility",
      "Access fresh & motivated talent",
      "Get custom solutions",
      "Collaborate with emerging leaders"
    ]
  }
];

const Benefits = () => (
  <section id="benefits" className="benefits">
    <h2 className="benefits-title">Benefits</h2>
    <div className="benefits-container">
      {BENEFITS_DATA.map((benefit) => (
        <BenefitCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  </section>
);

export default Benefits;
