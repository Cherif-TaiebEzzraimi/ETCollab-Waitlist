import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "./Contributors.css";

const Contributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Djellouli Rabah Arslene",
      role: "Project Manager",
      level: "1 CS", 
      profilePic: "/public/arselane.jpg", // Using existing profile pic as placeholder
      github: "#",
      linkedin: "#",
      email: "arslenedjellouli@gmail.com"
    },
    {
      id: 2,
      name: "Taieb-Ezzraimi Cherif",
      role: "Frontend Developer",
      level: "1 CS",
      profilePic: "/public/Cherif.jpg",
      github: "#",
      linkedin: "#",
      email: "john@email.com"
    },
    {
      id: 3,
      name: "Majd Baghdadi",
      role: "Frontend Developer",
      level: "1 CS",
      profilePic: "/profile/pfp.svg",
      github: "#",
      linkedin: "#",
      email: "jane@email.com"
    },
    {
      id: 4,
      name: "Fares Mohamed Benhamadi",
      role: "Frontend Developer",
      level: "2 CP",
      profilePic: "/profile/pfp.svg",
      github: "#",
      linkedin: "#",
      email: "mike@email.com"
    },
    {
      id: 5,
      name: "Mohamed-Elhadi Bachir",
      role: "Backend Developer",
      level: "1 CS",
      profilePic: "/profile/pfp.svg",
      github: "#",
      linkedin: "#",
      email: "med.elhadi.bachir@gmail.com"
    },
    {
      id: 6,
      name: "Daachi Oussama",
      role: "Backend Developer",
      level: "1 CS",
      profilePic: "/profile/pfp.svg",
      github: "#",
      linkedin: "#",
      email: "mike@email.com"
    },
    {
      id: 7,
      name: "Abdellah Khalil Kessoum",
      role: "Backend Developer",
      level: "1 CS",
      profilePic: "/profile/pfp.svg",
      github: "#",
      linkedin: "#",
      email: "mike@email.com"
    },
    {
      id: 8,
      name: "Rym Rouikha",
      role: "UI/UX Designer",
      level: "2 CP",
      profilePic: "/public/Rym.jpeg",
      github: "#",
      linkedin: "#",
      email: "rymrouikha.05@gmail.com"
    },
    {
      id: 9,
      name: "Narimene Hamgani",
      role: "Graphic Designer",
      level: "2 CP",
      profilePic: "/profile/pfp.svg",
      github: "#",
      linkedin: "#",
      email: "hamganinarimene@gmail.com"
    }
  ];

  // Mobile carousel behavior (similar to Testimonials)
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const scrollNext = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.contributor-card')?.offsetWidth || 0;
    const gap = 24;
    el.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
  }, []);

  const scrollPrev = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.contributor-card')?.offsetWidth || 0;
    const gap = 24;
    el.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons);
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [updateScrollButtons]);

  return (
    <section id="contributors" className="contributors-section">
      <div className="contributors-container">
        <h2 className="contributors-title">Our Contributors</h2>

        {/* Desktop/Tablets: grid layout */}
        <div className="contributors-grid">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <div className="contributor-profile">
                <img
                  src={contributor.profilePic}
                  alt={contributor.name}
                  className="contributor-avatar"
                />
              </div>
              <div className="contributor-level">{contributor.level}</div>
              <div className="contributor-role">{contributor.role}</div>
              <div className="contributor-name">{contributor.name}</div>
              <div className="contributor-contacts">
                <a href={contributor.github} className="contact-icon">
                  <img src="/login/github.png" alt="GitHub" />
                </a>
                <a href={contributor.linkedin} className="contact-icon">
                  <img src="/Footer/linkedin.png" alt="LinkedIn" />
                </a>
                <a href={`mailto:${contributor.email}`} className="contact-icon">
                  <img src="/Footer/mail.png" alt="Email" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: one card at a time with arrows */}
        <div className="contributors-carousel-wrapper">
          <div className="contributors-carousel" ref={carouselRef}>
            {contributors.map((contributor) => (
              <div key={contributor.id} className="contributor-card">
                <div className="contributor-profile">
                  <img
                    src={contributor.profilePic}
                    alt={contributor.name}
                    className="contributor-avatar"
                  />
                </div>
                <div className="contributor-level">{contributor.level}</div>
                <div className="contributor-role">{contributor.role}</div>
                <div className="contributor-name">{contributor.name}</div>
                <div className="contributor-contacts">
                  <a href={contributor.github} className="contact-icon">
                    <img src="/login/github.png" alt="GitHub" />
                  </a>
                  <a href={contributor.linkedin} className="contact-icon">
                    <img src="/Footer/linkedin.png" alt="LinkedIn" />
                  </a>
                  <a href={`mailto:${contributor.email}`} className="contact-icon">
                    <img src="/Footer/mail.png" alt="Email" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {canScrollLeft && (
            <button className="contributors-prev" onClick={scrollPrev}>
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button className="contributors-next" onClick={scrollNext}>
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
