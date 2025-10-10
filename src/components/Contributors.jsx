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
      github: "https://github.com/arslenedjellouli",
      linkedin: "https://www.linkedin.com/in/rabah-arslene-djellouli-247499287/",
      email: "arslenedjellouli@gmail.com"
    },
    {
      id: 2,
      name: "Taieb-Ezzraimi Cherif",
      role: "Frontend Developer",
      level: "1 CS",
      profilePic: "/public/Cherif.jpg",
      github: "https://github.com/Cherif-TaiebEzzraimi",
      linkedin: "https://www.linkedin.com/in/taieb-ezzraimi-cherif-842084331/",
      email: "cheriftbz19@email.com"
    },
    {
      id: 3,
      name: "Majd Baghdadi",
      role: "Frontend Developer",
      level: "1 CS",
      profilePic: "/public/Majd.jpg",
      github: "https://github.com/Majd-Baghdadi",
      linkedin: "https://www.linkedin.com/in/majd-baghdadi-48ab352b0/",
      email: "majd.baghdadi@ensia.edu.dz"
    },
    {
      id: 4,
      name: "Fares Mohammed Benhammadi",
      role: "Frontend Developer",
      level: "2 CP",
      profilePic: "/public/fares.webp",
      github: "https://github.com/faresBenhammadi",
      linkedin: "https://www.linkedin.com/in/fares-benhammadi-6b3b51389/",
      email: "mohammed-fares.benhammadi@ensia.edu.dz"
    },
    {
      id: 5,
      name: "Mohamed-Elhadi Bachir",
      role: "Backend Developer",
      level: "1 CS",
      profilePic: "/public/Elhadi.png",
      github: "https://github.com/Elhadi-B",
      linkedin: "https://www.linkedin.com/in/elhadi-bachir-79109a307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "med.elhadi.bachir@gmail.com"
    },
    {
      id: 6,
      name: "Daachi Oussama",
      role: "Backend Developer",
      level: "1 CS",
      profilePic: "/public/Oussy.jpg",
      github: "https://github.com/OussamaDaachi24",
      linkedin: "https://www.linkedin.com/in/oussama-student-daachi-/",
      email: "oussamadaachi1932@gmail.com"
    },
    {
      id: 7,
      name: "Abdellah Khalil Kessoum",
      role: "Backend Developer",
      level: "1 CS",
      profilePic: "/public/Khalil.jpeg",
      github: "https://github.com/Cheateyy",
      linkedin: "https://www.linkedin.com/in/abdellah-elkhalil-kessoum-ba854a2a6/",
      email: "khalilkessoum753@gmail.com"
    },
    {
      id: 8,
      name: "Rym Rouikha",
      role: "UI/UX Designer",
      level: "2 CP",
      profilePic: "/public/Rym.jpeg",
      github: "https://github.com/rymrouikha",
      linkedin: "#",
      email: "rymrouikha.05@gmail.com"
    },
    {
      id: 9,
      name: "Narimene Hamgani",
      role: "Graphic Designer",
      level: "2 CP",
      profilePic: "/public/Narimene.jpeg",
      github: "https://github.com/nariham",
      linkedin: "https://www.linkedin.com/in/narimene-hamgani-b40257382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
    
    // More precise calculation for arrow visibility
    const isAtStart = scrollLeft <= 5; // Small tolerance for smooth scrolling
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 5; // Small tolerance
    
    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  }, []);

  const scrollNext = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    // Find current visible card
    const cards = el.querySelectorAll('.contributor-card');
    const containerRect = el.getBoundingClientRect();
    
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      const isVisible = cardRect.left >= containerRect.left && cardRect.right <= containerRect.right;
      
      if (isVisible && i < cards.length - 1) {
        // Scroll to next card
        cards[i + 1].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'start' 
        });
        break;
      }
    }
  }, []);

  const scrollPrev = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    // Find current visible card
    const cards = el.querySelectorAll('.contributor-card');
    const containerRect = el.getBoundingClientRect();
    
    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();
      const isVisible = cardRect.left >= containerRect.left && cardRect.right <= containerRect.right;
      
      if (isVisible && i > 0) {
        // Scroll to previous card
        cards[i - 1].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'start' 
        });
        break;
      }
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    updateScrollButtons();
    
    // Add throttled scroll listener to prevent too frequent updates
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateScrollButtons, 100);
    };
    
    el.addEventListener('scroll', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
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
