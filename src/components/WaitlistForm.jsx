import React, { useState, useEffect } from "react";
import "./WaitlistForm.css";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date to October 21, 2025
  const targetDate = new Date('2025-10-21T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // linki hna khalil
    console.log('Form submitted:', formData);
    alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
    setFormData({ fullName: '', email: '' });
  };

  return (
    <section id="waitlist-form" className="waitlist-form-section">
      <div className="waitlist-container">
        <div className="waitlist-content">
          <h2 className="waitlist-title">Join the waitlist</h2>
          <p className="waitlist-description">
            ETCOLLAB is coming soon. A space where teams connect, organize, and grow together. 
            Sign up now and be among the first to try it out!
          </p>
          
          <div className="countdown-container">
            <div className="countdown-box">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes}</span>
                <span className="countdown-label">Mins</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds}</span>
                <span className="countdown-label">Secs</span>
              </div>
            </div>
          </div>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Djellouli Rabah Arslene"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. arslene@etcollab.com"
                className="form-input"
                required
              />
            </div>
            
            <button type="submit" className="join-button">
              <img src="/join_button.png" alt="Join now" className="join-button-img" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
