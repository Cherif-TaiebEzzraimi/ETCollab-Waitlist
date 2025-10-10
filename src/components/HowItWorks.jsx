import React from "react";
import { Lightbulb, Users, CheckSquare, Trophy } from "lucide-react";
import TimelineStep from "./TimelineStep";

const TIMELINE_STEPS = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Propose & Approve",
    description: "Members, mentors, professors, or sponsors submit project ideas, which are reviewed and approved with descriptions, required skills, deadlines, and open roles."
  },
  {
    id: 2,
    icon: Users,
    title: "Join & form teams",
    description: "Students browse projects, apply for roles, and teams are formed with cross-cell collaboration."
  },
  {
    id: 3,
    icon: CheckSquare,
    title: "Assign Tasks & Track Progress",
    description: "Tasks are created with clear goals and deadlines. Members receive assignments, request feedback or mentoring, and update progress."
  },
  {
    id: 4,
    icon: Trophy,
    title: "Submit & Showcase",
    description: "Completed work is reviewed, approved, and archived or showcased, ready to be added to profiles or shared externally."
  }
];

const HowItWorks = () => (
  <section id="how" className="how-it-works">
    <h2 className="section-title-home">How it works</h2>
    <div className="timeline">
      <div className="timeline-line"></div>
      {TIMELINE_STEPS.map((step, index) => (
        <TimelineStep
          key={step.id}
          step={step}
          isFirst={index === 0}
          isLast={index === TIMELINE_STEPS.length - 1}
        />
      ))}
    </div>
  </section>
);

export default HowItWorks;
