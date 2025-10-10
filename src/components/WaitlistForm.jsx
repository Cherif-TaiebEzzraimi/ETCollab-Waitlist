import React, { useState, useEffect } from "react";
import "./WaitlistForm.css";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://etcollab-waitlist-5.onrender.com/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '' });
        console.log('Successfully joined waitlist!');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', response.status, errorData);
        
        // Handle specific error cases
        if (response.status === 400) {
          // Bad request - might be duplicate email or validation error
          setSubmitStatus('error');
        } else if (response.status === 500) {
          // Server error
          setSubmitStatus('error');
        } else {
          setSubmitStatus('error');
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success-message">
              <h3>🎉 Welcome to ETCOLLAB!</h3>
              <p>Thank you for joining our waitlist! We'll be in touch soon with updates.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error-message">
              <h3>❌ Something went wrong</h3>
              <p>Please try again or contact us if the problem persists.</p>
            </div>
          )}

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Djellouli Rabah Arslene"
                className="form-input"
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className="join-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-text">Joining...</span>
              ) : (
                <img src="/join_button.png" alt="Join now" className="join-button-img" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
