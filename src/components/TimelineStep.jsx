import React from "react";

const TimelineStep = ({ step, isFirst, isLast }) => {
  const IconComponent = step.icon;
  return (
    <div className={`timeline-card ${isFirst ? 'first-card' : ''} ${isLast ? 'last-card' : ''}`}>
      <div className="card-icon">
        <IconComponent size={24} />
      </div>
      <h3 className="card-title">{step.title}</h3>
      <p className="card-description">{step.description}</p>
    </div>
  );
};

export default TimelineStep;
