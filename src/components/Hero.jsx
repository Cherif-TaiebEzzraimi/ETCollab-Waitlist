import React from "react";
const Hero = ({onClick}) => (
  <section className="hero">
    <div className="hero-oval">
      <div className="hero-content">
        <h1 id="welcome">Join the ETCollab Waitlist</h1>
        <p>Be the first to experience our collaboration platform. Turn ideas into real projects with the ETC community</p>
        {onClick && (
          <div className="hero-actions">
            <button onClick={onClick} className="join-button">
              <img src="/join_button.png" alt="Join Waitlist" className="join-button-img" />
            </button>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Hero;
